'use client'

import Link from 'next/link';
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { addSingleForm } from "@/lib/singleForm";
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



const FormSchema = z
    .object({
        eventId: z.string().min(1).max(50),
        userId: z.string().min(1).max(50),
        firstName: z.string().min(1, 'firstName are required').max(50),
        lastName: z.string().min(1, 'lastName are required').max(50),
        email: z.string().min(1, 'Email is required').email('Invalid email'),
        mobileNo: z.string().min(10, 'give correct number').max(10, 'give correct number'),
        college: z.string().min(3).max(100),
        session: z.string().min(1, 'session is required').max(20, 'put in correct formate'),
        branch: z.string().min(1).max(100),
        fee: z.number().nonnegative(),
    });



const SingleForm = ({ event, userData }) => {
    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            eventId: event._id,
            userId: userData.userId,
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            mobileNo: '',
            college: '',
            session: '',
            branch: '',
            fee: 0,
        },
    });

    
    const [state, formAction] = useFormState(addSingleForm, undefined);

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


    const onSubmit = (values) => {
        formAction(values);
    };


    return (
        <div className="py-2 mb-8 px-48">
            <h1 className="text-xl font-semibold mb-4 underline underline-offset-2">Register Yourself</h1>


            <Form {...form} >
                <div className=' bg-slate-100 p-5 rounded-xl'>
                    <div>
                        <form onSubmit={form.handleSubmit(onSubmit)} className=''>
                            <div className='space-y-2'>

                                {/* Event id */}
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

                                {/* user id */}
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


                                {/* Name */}
                                <div className=" flex gap-5">
                                    <FormField
                                        control={form.control}
                                        name='firstName'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">First Name</FormLabel>
                                                <FormControl className=' bg-white'>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name='lastName'
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Last Name</FormLabel>
                                                <FormControl className=' bg-white'>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* email */}
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

                                {/* mobile no */}
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


                                {/*select college */}
                                <FormField
                                    control={form.control}
                                    name="college"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">College</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select a College" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="PURNEA COLLEGE OF ENGINEERING, PURNEA">PURNEA COLLEGE OF ENGINEERING, PURNEA</SelectItem>
                                                    <SelectItem value="SITAMARHI INSTITUTE OF TECHNOLOGY, SITAMARHI">SITAMARHI INSTITUTE OF TECHNOLOGY, SITAMARHI</SelectItem>
                                                    <SelectItem value=" BAKHTIYARPUR COLLEGE OF ENGINEERING, PATNA"> BAKHTIYARPUR COLLEGE OF ENGINEERING, PATNA</SelectItem>
                                                    <SelectItem value="SUPAUL COLLEGE OF ENGINEERING, SUPAUL">SUPAUL COLLEGE OF ENGINEERING, SUPAUL</SelectItem>
                                                    <SelectItem value="RASHTRAKAVI RAMDHARI SINGH DINKAR COLLEGE OF ENGINEERING, BEGUSARAI">RASHTRAKAVI RAMDHARI SINGH DINKAR COLLEGE OF ENGINEERING, BEGUSARAI</SelectItem>
                                                    <SelectItem value="SERSHAH ENGINEERING COLLEGE, SASARAM, ROHTAS">SERSHAH ENGINEERING COLLEGE, SASARAM, ROHTAS</SelectItem>
                                                    <SelectItem value="LOK NAYAK JAI PRAKASH INSTITUTE OF TECHNOLOGY, CHAPRA">LOK NAYAK JAI PRAKASH INSTITUTE OF TECHNOLOGY, CHAPRA</SelectItem>
                                                    <SelectItem value="MOTIHARI COLLEGE OF ENGINEERING, MOTIHARI">MOTIHARI COLLEGE OF ENGINEERING, MOTIHARI</SelectItem>
                                                    <SelectItem value="DARBHANGA COLLEGE OF ENGINEERING, DARBHANGA">DARBHANGA COLLEGE OF ENGINEERING, DARBHANGA</SelectItem>
                                                    <SelectItem value="GAYA COLLEGE OF ENGINEERING, GAYA">GAYA COLLEGE OF ENGINEERING, GAYA</SelectItem>
                                                    <SelectItem value="BHAGALPUR COLLEGE OF ENGINEERING, BHAGALPUR">BHAGALPUR COLLEGE OF ENGINEERING, BHAGALPUR</SelectItem>
                                                    <SelectItem value="other">Other</SelectItem>
                                        
                                                    
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Session */}
                                <FormField
                                    control={form.control}
                                    name='session'
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

                                {/* Branch */}
                                <FormField
                                    control={form.control}
                                    name='branch'
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

                                {/* Reg. Fee */}
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



export default SingleForm;