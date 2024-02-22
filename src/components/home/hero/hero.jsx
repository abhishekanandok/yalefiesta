import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className=' flex'>
      <div className=' flex-1 ml-44'>
        <h2 className=' font-bold mt-32'>#The leading startup event</h2>
        <h2 className=' text-8xl text-indigo-900 font-bold mt-5 mb-5'>Greater <br></br>than Avatars</h2>
        <div className=' flex'>
        <Image
                src="/copy_image/shape-1.png"
                alt="venue image"
                width={20}
                height={20}
                className=''
              />
          <p className=' font-semibold pl-2 text-indigo-900'>Gotham Hall, 1356 Broadway, NY 10018, USA</p>
        </div>

{/* time */}
        <div className=' mt-5 flex justify-start pt-5 pr-40'>
          <div className=' flex-1'>
            <div className=' font-bold text-5xl text-indigo-900'>00</div>
            <div className=' text-slate-400 pl-2'>DAYS</div>
          </div>
          <div className=' flex-1'>
            <div className=' font-bold text-5xl text-indigo-900'>00</div>
            <div className=' text-slate-400'>HOURS</div>
          </div>
          <div className=' flex-1'>
            <div className=' font-bold text-5xl text-indigo-900'>00</div>
            <div className=' text-slate-400'>MINUTES</div>
          </div>
          <div className=' flex-1'>
            <div className=' font-bold text-5xl text-indigo-900'>00</div>
            <div className=' text-slate-400'>SECONDS</div>
          </div>
        </div>

        {/* button */}
      <div className=''>
        <button className=' bg-pink-500 text-white font-bold m-10 p-3 rounded-lg'>JOIN HERE</button>
        <button className=' font-bold'>+ ADD TO CALENDER </button>
      </div>
      </div>

      

      <div className=' flex-1'>
      <Image
                src="/copy_image/banner_img.png"
                alt="banner image"
                width={700}
                height={500}
                className='float-right'
              />
      </div>
      
    </div>
  )
}

export default Hero