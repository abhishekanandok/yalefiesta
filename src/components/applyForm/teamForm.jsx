'use client'

import Link from 'next/link';
import { useEffect, useState } from "react";
import { useForm, useFieldArray } from 'react-hook-form';
import { addTeamForm } from "@/lib/teamForm";
import { cn } from "@/lib/utils"
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { Label } from '@/components/ui/label';
import { IoPersonAddOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";





const FormSchema = z.object({
    eventId: z.string().min(1).max(50),
    userId: z.string().min(1).max(50),
    teamName: z.string().min(1, 'Team name is required').max(50),
    leaderName: z.string().min(1, 'Leader name is required').max(50),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    mobileNo: z.string().min(10, 'Mobile number must be 10 digits').max(10, 'Mobile number must be 10 digits'),
    altMobileNo: z.string().optional(),
    college: z.string().min(3, 'college name required').max(100),
    otherCollege: z.string().optional(),
    fee: z.number().nonnegative(),
    teamMembers: z.array(z.object({
        name: z.string().min(1, 'Name is required'),
        session: z.string().min(1, 'Session is required'),
        branch: z.string().min(1, 'Branch is required'),
    })),
}).refine(
    (data) => {
        if (data.college === "other") {
            return !!data.otherCollege;
        }
        return true;
    },
    {
        message: "College name is required",
        path: ["otherCollege"],
    }
);





const TeamForm = ({ event, userData }) => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            eventId: event._id,
            userId: userData.userId,
            teamName: '',
            leaderName: '',
            email: userData.email,
            mobileNo: '',
            altMobileNo: '',
            college: '',
            otherCollege: '',
            fee: 0,
            teamMembers: [{ name: '', session: '', branch: '' }],
        },
    });

    const college = form.watch("college");

    const { control } = form;
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'teamMembers',
    });


    const [state, formAction] = useFormState(addTeamForm, undefined);
    const router = useRouter();
    const { toast } = useToast()

    useEffect(() => {
        state?.success && router.push("/events");
        if (state?.success) {
            toast({
                description: "Form submitted succesfully.",
            });
        }
    }, [state?.success, state]);

    //form data here
    const onSubmit = (values) => {
        // console.log(values);
        formAction(values);
    };



    const addMember = () => {
        append({ name: '', session: '', branch: '' });
    };

    const removeMember = (index) => {
        remove(index);
    };

    return (
        <div className="py-2 mb-8 px-12">
            <h1 className="text-xl font-semibold mb-4 underline underline-offset-2">Register Team</h1>
            <Form {...form} >
                <div className=' bg-slate-100 p-5 rounded-xl'>
                    <div>
                        <form onSubmit={form.handleSubmit(onSubmit)} className=''>
                            <div className='space-y-2'>
                                <FormField
                                    control={form.control}
                                    name='eventId'
                                    render={({ field }) => (
                                        <FormItem className="hidden">
                                            <FormLabel >Event Id</FormLabel>
                                            <FormControl className=' bg-white'>
                                                <Input disabled {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='userId'
                                    render={({ field }) => (
                                        <FormItem className="hidden">
                                            <FormLabel >User Id</FormLabel>
                                            <FormControl className=' bg-white'>
                                                <Input disabled {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='teamName'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Team Name</FormLabel>
                                            <FormControl className=' bg-white'>
                                                <Input placeholder='ex- team flex' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='leaderName'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Leader Name</FormLabel>
                                            <FormControl className=' bg-white'>
                                                <Input placeholder='ex- john dev' {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='email'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Email</FormLabel>
                                            <FormControl className=' bg-white'>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='mobileNo'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Mobile No.</FormLabel>
                                            <div className=" flex gap-1">
                                                <p className=" text-center text-md pt-1">+91</p>
                                                <FormControl className=' bg-white'>
                                                    <Input className="max-w-48" placeholder='ex- 1234567890' {...field} />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name='altMobileNo'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel >Alternate Mobile No.</FormLabel>
                                            <div className=" flex gap-1">
                                                <p className=" text-center text-md pt-1">+91</p>
                                                <FormControl className=' bg-white'>
                                                    <Input className="max-w-48" placeholder='ex- 1234567890' {...field} />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div>
                                    <Label>Member Details:-</Label>
                                    <FormDescription>
                                        Include leader name also.
                                    </FormDescription>
                                    {fields.map((member, index) => (
                                        <div className=' flex gap-2' key={member.id}>
                                            <FormField
                                                control={form.control}
                                                name={`teamMembers.${index}.name`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Name</FormLabel>
                                                        <FormControl className=' bg-white'>
                                                            <Input placeholder='ex- Tejmay Anand' {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`teamMembers.${index}.session`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Session</FormLabel>
                                                        <FormControl className=' bg-white'>
                                                            <Input placeholder='ex -2022-26' {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name={`teamMembers.${index}.branch`}
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Branch</FormLabel>
                                                        <FormControl className=' bg-white'>
                                                            <Input placeholder='ex- CSE' {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <Button className=' mt-8' variant="outline" size="icon" type="button" onClick={() => removeMember(index)}><MdDelete className='h-5 w-5' /></Button>
                                        </div>
                                    ))}
                                    <Button className=' mt-2 ml-2' size="sm" type="button" onClick={addMember}><IoPersonAddOutline /> Add</Button>
                                </div>


                                <FormField
                                    control={form.control}
                                    name="college"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">College</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl className=' bg-white'>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a College" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="PURNEA COLLEGE OF ENGINEERING, PURNEA">PURNEA COLLEGE OF ENGINEERING, PURNEA</SelectItem>
                                                    <SelectItem value="BAKHTIYARPUR COLLEGE OF ENGINEERING, PATNA">BAKHTIYARPUR COLLEGE OF ENGINEERING, PATNA</SelectItem>
                                                    <SelectItem value="SUPAUL COLLEGE OF ENGINEERING, SUPAUL">SUPAUL COLLEGE OF ENGINEERING, SUPAUL</SelectItem>
                                                    <SelectItem value="BHAGALPUR COLLEGE OF ENGINEERING, BHAGALPUR">BHAGALPUR COLLEGE OF ENGINEERING, BHAGALPUR</SelectItem>
                                                    <SelectItem value="DARBHANGA COLLEGE OF ENGINEERING, DARBHANGA">DARBHANGA COLLEGE OF ENGINEERING, DARBHANGA</SelectItem>
                                                    <SelectItem value="B. P. MANDAL COLLEGE OF ENGINEERING, MADHEPURA">B. P. MANDAL COLLEGE OF ENGINEERING, MADHEPURA</SelectItem>
                                                    <SelectItem value="GAYA COLLEGE OF ENGINEERING, GAYA">GAYA COLLEGE OF ENGINEERING, GAYA</SelectItem>
                                                    <SelectItem value="KATIHAR ENGINEERING COLLEGE, KATIHAR">KATIHAR ENGINEERING COLLEGE, KATIHAR</SelectItem>
                                                    <SelectItem value="SAHARSA COLLEGE OF ENGINEERING, SAHARSA">SAHARSA COLLEGE OF ENGINEERING, SAHARSA</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>


                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {college === "other" && (
                                    <FormField
                                        control={form.control}
                                        name="otherCollege"
                                        render={({ field }) => {
                                            return (
                                                <FormItem>
                                                    <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">College name</FormLabel>
                                                    <FormControl className=' bg-white'>
                                                        <Input placeholder="College full name" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            );
                                        }}
                                    />
                                )}
                                <FormField
                                    control={form.control}
                                    name='fee'
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel >Reg. Fee</FormLabel>
                                            <FormControl className=' bg-white'>
                                                <Input disabled {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <Button size="lg" className=' ml-1 mt-6' type='submit'>
                                SUBMIT
                            </Button>
                        </form>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default TeamForm;
