import { Event } from "@/models/event";
import { connectToDb } from "@/lib/connectToDb";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const id = params;
    console.log(id);

    try {
        connectToDb();

        const event = await Event.findOne(id);
        return NextResponse.json(event);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch event!");
    }
};

// export const DELETE = async (request, { params }) => {
//   const { slug } = params;

//   try {
//     connectToDb();

//     await Event.deleteOne({ slug });
//     return NextResponse.json("Event deleted");
//   } catch (err) {
//     console.log(err);
//     throw new Error("Failed to delete event!");
//   }
// };
