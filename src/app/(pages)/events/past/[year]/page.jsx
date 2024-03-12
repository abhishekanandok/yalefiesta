import React from 'react'
import EventCard from "@/components/eventCard/eventCard"

const event = () => {
  return (
    <div className=' flex flex-col items-center gap-9 pl-20 pr-20'>
      <h2 className=' flex-1 text-center text-3xl'>Our Events</h2>
      <div className=' flex-1 flex justify-evenly gap-10'>
      <EventCard></EventCard>
      <EventCard></EventCard>
      <EventCard></EventCard>
      <EventCard></EventCard>
      </div>
    </div>
  )
}

export default event