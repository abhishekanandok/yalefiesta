"use client";

import React from 'react';
import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { login } from "@/lib/action";
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
import GoogleSignInButton from '@/components/signupForm/googleButton';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiAtThin } from "react-icons/pi";
import { GrCheckboxSelected } from "react-icons/gr";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"




const FormSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(8, 'Password must have than 8 characters'),
});

const SignInForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });


  const router = useRouter();
  const { toast } = useToast()

  useEffect(() => {
    state?.success && router.push("/");
    if (state?.success) {
      toast({
        description: "Login succesfull.",
      });
    }
  }, [state?.success, router]);

  useEffect(() => {
    if (state?.error) {
      toast({
        variant: "destructive",
        title: state?.error,
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again"> <a href="/login">Try again</a> </ToastAction>,
      });
    }
  }, [state?.error, state]);

  const onSubmit = (values) => {
    console.log(values);
    formAction(values);
  };

  return (
    <Form {...form}>
      <div className=' min-w-96 bg-slate-100 p-5 rounded-xl'>
        <div>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
            <div className='space-y-2'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Email</FormLabel>
                    <FormControl className=' bg-white'>
                      <Input placeholder='mail@example.com' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Password</FormLabel>
                    <FormControl className=' bg-white'>
                      <Input
                        type='password'
                        placeholder='Enter your password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className='w-full mt-6 font-bold' type='submit'>
              Sign in
            </Button>
          </form>
        </div>

        <div>
          <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
            or
          </div>
          <div className='  flex justify-around'>
            <GoogleSignInButton><FaGoogle className="h-5 w-5 mr-2" />Google</GoogleSignInButton>
            <GoogleSignInButton><FaGithub className="h-5 w-5 mr-2" />Github</GoogleSignInButton>
          </div>
          <p className='text-center text-sm text-gray-600 mt-4'>
            If you don&apost have an account, please&nbsp;
            <Link className='text-blue-500 hover:underline font-bold' href='/signup'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </Form>
  );
};

export default SignInForm;
