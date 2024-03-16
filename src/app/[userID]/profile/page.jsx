import React from 'react'
import Link from 'next/link'
import { auth } from "@/lib/auth";
import { getUser } from "@/lib/data";
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CiEdit } from "react-icons/ci";




const UserProfile = async ({ params }) => {
  const session = await auth();
  const user = await getUser(session.user.id);


  return (
    <div className="py-2 px-8 mb-8 relative">
      <h1 className="text-xl font-bold mb-4 underline underline-offset-2">Profile</h1>
      <div className=' flex'>
        <div className=' flex flex-col pr-4 gap-2'>
          <Label className=" text-md font-bold">Username:- </Label>
          <Label className=" text-md font-bold">Name:- </Label>
          <Label className=" text-md font-bold">Email:- </Label>
          <Label className=" text-md font-bold">College:- </Label>
          <Label className=" text-md font-bold">College ID Card No.:- </Label>
          <Label className=" text-md font-bold">Branch:- </Label>
          <Label className=" text-md font-bold">Session:- </Label>
        </div>

        <div className='flex flex-col gap-2'>
          <p>{user.username}</p>
          <p>{user.firstName} {user.lastName}</p>
          <p>{user.email}</p>
          <p>Purnia college of engeneering</p>
          <p>22151131028</p>
          <p>CSE(AI)</p>
          <p>2022-26</p>
        </div>

        <div className=' bg-slate-200 h-52 w-52 ml-14 rounded-full border-double border-4 border-pink-500 shadow-lg shadow-pink-500/50'></div>
      </div>

      <Button className=' absolute bottom-0 left-0 ml-8'>
        <Link href={`/${params.userID}/profile/edit`}>
          <span className="flex gap-2 items-center"><CiEdit className='h-5 w-5'/>Edit</span>
        </Link>
      </Button>

    </div>
  );
};

export default UserProfile;
