import React from 'react';
import ScheduleEvent from "@/components/sheduleEvent/shedule";

const HomePage = () => {
  return (
    <div className="container mx-auto mt-8">
      {/* Your Home Page Content Here */}
      <h1 className="text-4xl font-bold mb-4">Welcome to yaleFiesta</h1>
      <p className="text-lg mb-6">
        Join us for an amazing festival experience filled with hackathons, dancing, debates, kabaddi, cricket, singing, and more!
      </p>
      {/* Add more sections and content as needed */}
      <ScheduleEvent/>
    </div>
  );
};

export default HomePage;
