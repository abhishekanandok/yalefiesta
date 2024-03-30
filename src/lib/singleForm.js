"use server";

import { revalidatePath } from "next/cache";
import { SingleForm } from "../models/singleForm";
import { connectToDb } from "./connectToDb";



export const addSingleForm = async (prevState, formData) => {
    const {
        eventId,
        userId,
        firstName,
        lastName,
        email,
        mobileNo,
        college,
        session,
        branch,
        fee,
    } = formData;

    try {
        connectToDb();
        const newSingleForm = new SingleForm({
            eventId,
            userId,
            firstName,
            lastName,
            email,
            mobileNo,
            college,
            session,
            branch,
            fee,
        });

        await newSingleForm.save();
        console.log("saved to db");
        return { success: true };

    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};