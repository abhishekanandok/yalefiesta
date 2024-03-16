'use client'

import EventTable from "@/app/[userID]/components/eventTable/eventTable";
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { register } from "@/lib/action";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"



const FormSchema = z
  .object({
    firstName: z.string().min(1, 'First Name is required').max(20),
    lastName: z.string().min(1, 'Last Name is required').max(20),
    username: z.string().min(5, 'Username is required').max(20),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z.string().min(1, 'Password is required').min(8, 'Password must have than 8 characters'),
    confirmPassword: z.string().min(1, 'Password confirmation is required'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Password do not match',
  });



const createEvent = () => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });



  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();
  const { toast } = useToast()

  useEffect(() => {
    state?.success && router.push("/login");
    if (state?.success) {
      toast({
        description: "Your account created succesfully.",
      });
    }
  }, [state?.success, router]);

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: "destructive",
        title: state?.error,
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again"> <a href="/signup">Try again</a> </ToastAction>,
      });
    }

  }, [state?.error, state]);


  const onSubmit = (values) => {
    console.log(values);
    // formAction(values);
  };


  return (
    <div className="py-2 px-8 mb-8 relative">
      <h1 className="text-xl font-bold mb-4 underline underline-offset-2">Event Listing</h1>

      <div className=' flex gap-10'>
        <div>
          <h2 className="text-lg underline underline-offset-1">Create events</h2>
          <Form {...form} >
            <div className=' min-w-96 bg-slate-100 p-5 rounded-xl'>
              <div>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
                  <div className='space-y-2'>
                    
                    <FormField
                      control={form.control}
                      name='username'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Title</FormLabel>
                          <FormControl className=' bg-white'>
                            <Input placeholder='@johndoe123' {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='username'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Descreption</FormLabel>
                          <FormControl className=' bg-white'>
                            <Input placeholder='@johndoe123' {...field} />
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
                          <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Tag</FormLabel>
                          <FormControl className=' bg-white'>
                            <Input placeholder='mail@example.com' {...field} />
                          </FormControl>
                          <FormMessage />
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
        <div>
          <h2 className="text-lg underline underline-offset-1">All events</h2>
          <EventTable />
        </div>
      </div>
    </div>
  )
}

export default createEvent;