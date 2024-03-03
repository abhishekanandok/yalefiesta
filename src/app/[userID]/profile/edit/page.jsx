import React from 'react'
import Link from 'next/link'

const prifle_edit = ({params}) => {
  return (
    <div className=' text-center'>
      <h1>prifle_edit</h1>
      <h2>comming soon ............</h2>
      <Link className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" 
      href={`/${params.userID}/profile`}>Go Back</Link>
    </div>
  )
}

export default prifle_edit