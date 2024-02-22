import React from 'react';
import Hero from "@/components/home/hero/hero";
import Gallary from "@/components/home/gallary/gallary";
import Sponsors from "@/components/home/sponsors/sponsors";
import LatestNews from "@/components/home/latestNews/latestNews";
import EventShedule from "@/components/home/eventShedule/eventShedule";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      {/* Your Home Page Content Here */}
      {/* <h1 className="text-4xl font-bold mb-4 text-center">Welcome to yaleFiesta</h1> */}
      
      <Hero/>
      <EventShedule/>
      <Gallary/>
      <LatestNews/>
      <Sponsors/>
    </div>
  );
};

export default HomePage;
