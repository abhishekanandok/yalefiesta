"use client";

import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { register } from "@/lib/action";
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

const SignUpForm = () => {
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
    // console.log(values);
    formAction(values);
  };



  return (
    <Form {...form} >
      <div className=' max-w-96 bg-slate-100 p-5 rounded-xl'>
        <div>
          <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
            <div className='space-y-2'>
              <div className=' flex gap-4'>
                <FormField
                  control={form.control}
                  name='firstName'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">First Nmae</FormLabel>
                      <FormControl className=' bg-white'>
                        <Input placeholder='john' {...field} />
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
                        <Input placeholder='Doe' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Username</FormLabel>
                    <FormControl className=' bg-white'>
                      <Input placeholder='@johndoe123' {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
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
              <FormField
                control={form.control}
                name='confirmPassword'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className=" after:content-['*'] after:ml-0.5 after:text-red-500">Re-Enter your password</FormLabel>
                    <FormControl className=' bg-white'>
                      <Input
                        placeholder='Re-Enter your password'
                        type='password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button className='w-full mt-6 font-bold' type='submit'>
              Create Account
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
            If you  have an account, please&nbsp;
            <Link className='text-blue-500 hover:underline font-bold' href='/login'>
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </Form>
  );
};

export default SignUpForm;
