import React from 'react'
import Image from 'next/image'

const gallary = () => {
  return (
    <div className=' pt-5 pb-10'>
      <h1 className=' text-center text-xl font-bold'>GALLARY</h1>
      <div className=' flex justify-between pt-3 ml-44 mr-44'>
      <div className='w-72 border-solid border-2 border-sky-500'>
        <Image
                src="/copy_image/blog1.jpg"
                alt="banner image"
                width={500}
                height={800}
                className=''
              />
      </div>
      <div className=' w-72 border-solid border-2 border-sky-500'>
        <Image
                src="/copy_image/blog2.jpg"
                alt="banner image"
                width={700}
                height={500}
                className=''
              />
      </div>
      <div className='w-72 border-solid border-2 border-sky-500'>
        <Image
                src="/copy_image/blog3.jpg"
                alt="banner image"
                width={700}
                height={500}
                className=''
              />
      </div>
    </div>
    </div>
  )
}

export default gallary