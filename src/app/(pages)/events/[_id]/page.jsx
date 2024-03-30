import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { FaArrowDown } from "react-icons/fa";

// FETCH DATA WITH AN API
const getData = async (_id) => {
    const res = await fetch(`http://localhost:3000/api/event/${_id}`);

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};

// export const generateMetadata = async ({ params }) => {
//   const { _id } = params;

//   const event = await getevent(slug);

//   return {
//     title: event.title,
//     description: event.desc,
//   };
// };

const SingleEventPage = async ({ params }) => {
    const { _id } = params;
    // console.log(_id);
    const event = await getData(_id);


    return (
        <div className=" px-48 pb-5 ">
            <h1 className=" text-2xl font-bold mb-4">{event.title}</h1>

            <div className=" flex flex-col gap-4">
                <Image
                    src={event.linkImg}
                    height={500}
                    width={900}
                    alt={event.title}
                    className=" max-h-96 rounded-lg min-w-full"
                >
                </Image>
                <p><Label className=" font-bold text-md text-blue-600">Event Description:- </Label>{event.description}</p>
                <p><Label className=" font-bold text-md text-blue-600">Event Rules:- </Label>{event.eventRules}</p>
                <p><Label className=" font-bold text-md text-blue-600">Event Venue:- </Label>{event.eventVenue}</p>
                <p><Label className=" font-bold text-md text-blue-600">Prizes:- </Label>{event.eventPrize}</p>
                <p><Label className=" font-bold text-md text-blue-600">Sponsors:- </Label>{event.sponsors}</p>
                <p><Label className=" font-bold text-md text-blue-600">Event Date:- </Label>{event.eventDate.toString().slice(0, 10)}</p>

                <p><Label className=" font-bold text-md text-blue-600">Event Created:- </Label> {event.createdAt.toString().slice(0, 10)}</p>
            </div>

            <div className="py-5">
            <Button variant={"outline"}><FaArrowDown className=" h-5 w-5 animate-bounce mr-2" />Download Pdf</Button>
            </div>
            <Link href={`/events/${event._id}/apply`} ><Button className=" mt-4">Apply</Button></Link>
        </div>
    );
};

export default SingleEventPage;
