'use client'

import EventTable from "@/app/[userID]/components/eventTable/eventTable";
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { addEvent } from "@/lib/action";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { Textarea } from "@/components/ui/textarea"
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { LuPencilLine } from "react-icons/lu";
import { FaRegFolderOpen } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";



const FormSchema = z
  .object({
    title: z.string().min(1, 'Title is required').max(50),
    description: z.string().min(10, 'Description is required').max(2000),
    eventRules: z.string().min(5, 'Rules are required').max(2000),
    tags: z.string().min(1, 'Tags are required for classification').max(100),
    category: z.string().min(1, 'Category will help to filter events type').max(50),
    eventDate: z.date().min(new Date("2024-01-01"), { message: "Its already passed" }),
    eventVenue: z.string().min(3, 'Venue is required').max(100),
    eventPrize: z.string().min(1, 'Prize is required').max(100),
    sponsors: z.string().optional(),
    linkPdf: z.string().url(),
    linkImg: z.string().url(),
    team: z.boolean().default(false).optional(),
  });



const createEvent = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
      description: '',
      eventRules: '',
      tags: '',
      category: '',
      eventDate: '',
      eventVenue: '',
      eventPrize: '',
      sponsors: '',
      linkPdf: '',
      linkImg: '',
      team: false,
    },
  });



  const [state, formAction] = useFormState(addEvent, undefined);

  // const router = useRouter();
  const { toast } = useToast()

  useEffect(() => {
    if (state?.success) {
      toast({
        description: "Event created succesfully.",
      });
    }
  }, [state?.success, state]);


  const onSubmit = (values) => {
    // console.log(values);
    formAction(values);

  };


  return (
    <div className="py-2 px-5 mb-8 w-full">
      <h1 className="text-xl font-bold mb-4 underline underline-offset-2">Event Listing</h1>

      <div className=' flex gap-10'>

        <div className=" flex-1">
          <h2 className="text-lg underline underline-offset-1 flex gap-2 py-5"><LuPencilLine className='h-6 w-6' />Create events</h2>

          <Form {...form} >
            <div className=' bg-slate-100 p-5 rounded-xl'>
              <div>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
                  <div className='space-y-2'>

                    {/* Event Title */}
                    <FormField
                      control={form.control}
                      name='title'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Event Title</FormLabel>
                          <FormControl className=' bg-white'>
                            <Input placeholder='ex- codequest hacks-24' {...field} />
                          </FormControl>
                          <FormDescription>
                            This is event main title.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Event Descreption */}
                    <FormField
                      control={form.control}
                      name='description'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Event Descreption</FormLabel>
                          <FormControl className=' bg-white'>
                            <Textarea
                              placeholder="A breif introduction about Event."
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            A breif introduction about Event.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Event Rules */}
                    <FormField
                      control={form.control}
                      name='eventRules'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Event Rules</FormLabel>
                          <FormControl className=' bg-white'>
                            <Textarea
                              placeholder="Ex- Rule 1:- Team size 4"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            List down all rules
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Tags */}
                    <FormField
                      control={form.control}
                      name='tags'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Tag</FormLabel>
                          <FormControl className=' bg-white'>
                            <Input placeholder='ex- codequest, pcecoders26, ....' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/*select category */}
                    <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Hackathon">Hackathon</SelectItem>
                              <SelectItem value="Cricket">Cricket</SelectItem>
                              <SelectItem value="m@support.com">m@support.com</SelectItem>
                              <SelectItem value="Hackathon1">Hackathon1</SelectItem>
                              <SelectItem value="Cricket1">Cricket1</SelectItem>
                              <SelectItem value="m@support.com1">m@support.com1</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormDescription>
                            Select a category,which type of event.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Event Date */}
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Event Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[240px] pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Event Venue */}
                    <FormField
                      control={form.control}
                      name='eventVenue'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Event Venue</FormLabel>
                          <FormControl className=' bg-white'>
                            <Input placeholder='ex- PCE Purnia, Bihar, 854301' {...field} />
                          </FormControl>
                          <FormDescription>
                            Where this event organised?
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Event Prizes */}
                    <FormField
                      control={form.control}
                      name='eventPrize'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Event Prizes</FormLabel>
                          <FormControl className=' bg-white'>
                            <Textarea
                              placeholder="Ex- 1st Prize 9000 rupees"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Detailed prize lists
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Event sponsors */}
                    <FormField
                      control={form.control}
                      name='sponsors'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Event Sponsors</FormLabel>
                          <FormControl className=' bg-white'>
                            <Input placeholder='sponsors name' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* pdf link */}
                    <FormField
                      control={form.control}
                      name='linkPdf'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Attach Pdf Link</FormLabel>
                          <FormControl className=' bg-white'>
                            <Input placeholder='ex- google drive link' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* img link */}
                    <FormField
                      control={form.control}
                      name='linkImg'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Attach Image Link</FormLabel>
                          <FormControl className=' bg-white'>
                            <Input placeholder='ex- google photos link' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* team required checkbox*/}
                    <FormField
                      control={form.control}
                      name="team"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md py-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Team Required ?
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                  </div>
                  <Button className='w-full mt-6 font-bold' type='submit'>
                    Create Event
                  </Button>
                </form>
              </div>
            </div>
          </Form>
        </div>


        {/* 2nd pannel */}
        <div className=" flex-1">
          <h2 className="text-lg underline underline-offset-1 flex gap-2 py-5"><FaRegFolderOpen className='h-6 w-6' />All events</h2>
          <EventTable />
        </div>

      </div>
    </div>
  )
}

export default createEvent;