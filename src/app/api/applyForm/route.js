import { Apply } from "@/models/event";
import { connectToDb } from "@/lib/connectToDb";
import { NextResponse } from "next/server";


export const create = async (request, { body }) => {
    try {
        connectToDb();

        const newApply = new Apply(body);
        const result = await newApply.save();

        return NextResponse.json(result);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create application!");
    }
};

