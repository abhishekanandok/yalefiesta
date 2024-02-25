'use client'

import React from 'react'
import Image from 'next/image'

const sponsors = () => {
  return (
    <div className=' backdrop-blur-sm bg-white/30 text-center p-20'>
      
      <Image
                src="/copy_image/book_seat_img.jpg"
                alt="banner image"
                width={1500}
                height={700}
                className='backdrop-blur-sm bg-white/30'
              />
      

      <button className='bg-pink-500 text-white font-bold m-10 p-3 rounded-lg pl-10 pr-10'>Become a Sponsor</button>
    </div>
  )
}

export default sponsors