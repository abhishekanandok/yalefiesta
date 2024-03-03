import React from 'react'

const profile = ({ params }) => {
  return (
    <div className=' text-center'>
      <h1>Profile</h1>
      <h2>Username :- {params.userID}</h2>
    </div>
  )
}

export default profile