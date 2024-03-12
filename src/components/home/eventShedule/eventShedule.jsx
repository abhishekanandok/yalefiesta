import React from 'react'
import Image from 'next/image'

const eventShedule = () => {
  return (
    <div className=' flex flex-col text-center'>
      <h3 className=' text-slate-400'>SCHEDULE DETAILS</h3>
      <h4 className=' text-3xl font-bold text-indigo-800 pt-4 pb-4'>Event Schedules</h4>

      <div className=' flex justify-center'>
        <Image
          src="/copy_image/title.png"
          alt="venue image"
          width={60}
          height={5}
          sizes="100vw"
          style={{ width: '60px', height: 'auto' }}
          className='bg-center'
        />
      </div>



      <div className=' m-10'>
        {/* date */}
        <div className=' flex justify-center gap-4 text-center'>
          <div className=' h-20 w-36 border-solid border-2 bg-pink-500 pt-4'>
            <h6 className=' text-xl font-bold'>5th June</h6>
            <p className=' divide-slate-400'>friday</p>
          </div>
          <div className=' h-20 w-36 border-solid border-2 bg-slate-200 pt-4'>
            <h6 className=' text-xl font-bold'>5th June</h6>
            <p className=' divide-slate-400'>friday</p>
          </div>
          <div className=' h-20 w-36 border-solid border-2 bg-slate-200 pt-4'>
            <h6 className=' text-xl font-bold'>5th June</h6>
            <p className=' divide-slate-400'>friday</p>
          </div>

        </div>


        <div className=' pl-20 pr-20 pt-20 flex'>
          <article>
            <time className=' font-extrabold'>Mar 10, 2020</time>
            <h2 className=' font-bold'>Boost your conversion rate</h2>
            <p className="line-clamp-3">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
            <div>
              <Image src="/noavatar.png"
                height={10}
                width={10}
                alt='' />
              Lindsay Walton
            </div>
          </article>
          <article>
            <time className=' font-extrabold'>Mar 10, 2020</time>
            <h2 className=' font-bold'>Boost your conversion rate</h2>
            <p className="line-clamp-3">Nulla dolor velit adipisicing duis excepteur esse in duis nostrud occaecat mollit incididunt deserunt sunt. Ut ut sunt laborum ex occaecat eu tempor labore enim adipisicing minim ad. Est in quis eu dolore occaecat excepteur fugiat dolore nisi aliqua fugiat enim ut cillum. Labore enim duis nostrud eu. Est ut eiusmod consequat irure quis deserunt ex. Enim laboris dolor magna pariatur. Dolor et ad sint voluptate sunt elit mollit officia ad enim sit consectetur enim.</p>
            <div>
              <Image src="/noavatar.png"
                height={10}
                width={10}
                alt='' />
              Lindsay Walton
            </div>
          </article>
        </div>

        <button className=' bg-pink-500 text-white font-bold m-10 p-3 rounded-lg pl-10 pr-10'>More Details</button>
      </div>
    </div>
  )
}

export default eventShedule