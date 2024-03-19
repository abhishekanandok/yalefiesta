import EventCard from "@/components/eventCard/eventCard";
// import { getEvents } from "@/lib/data";


const getData = async () => {
  const res = await fetch("http://localhost:3000/api/event", { next: { revalidate: 0 } });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};



const EventPage = async () => {
  const events = await getData();
  // console.log(events);

  return (
    <div className="px-28 pb-10">
      <h2 className="text-2xl font-bold mb-4 underline underline-offset-2 text-center">Our Events</h2>
      <div className=" gap-5 grid grid-cols-3">
        {events.map((event) => (
          <div key={event._id}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventPage;
