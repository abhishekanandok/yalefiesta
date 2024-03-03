"use client"
import React from 'react'
import Link from 'next/link'


const UserProfile = ({ params }) => {
  // Dummy user data (replace with your user data fetching logic)
  const user = {
    id: '12345',
    username: 'john_doe',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'A passionate individual interested in technology and coding.',
  };



  return (
    <div className="p-8 max-w-md mx-auto bg-white rounded-md shadow-md mt-8">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <h2>Username :- {params.userID}</h2>
      <div className="mb-4">
        <label className="text-gray-600">Username:</label>
        <p className="text-black font-semibold">{user.username}</p>
      </div>
      <div className="mb-4">
        <label className="text-gray-600">Full Name:</label>
        <p className="text-black font-semibold">{user.fullName}</p>
      </div>
      <div className="mb-4">
        <label className="text-gray-600">Email:</label>
        <p className="text-black font-semibold">{user.email}</p>
      </div>
      <div className="mb-4">
        <label className="text-gray-600">Bio:</label>
        <p className="text-black">{user.bio}</p>
      </div>
      
      <Link className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" 
      href={`/${params.userID}/profile/edit`}>Edit</Link>
    </div>
  );
};

export default UserProfile;
