import { Event } from "@/models/event";
import { connectToDb } from "@/lib/connectToDb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();

    const events = await Event.find();
    return NextResponse.json(events);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch events!");
  }
};
