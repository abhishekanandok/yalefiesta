"use server";

import { revalidatePath } from "next/cache";
import { TeamForm } from "../models/teamForm";
import { connectToDb } from "./connectToDb";



export const addTeamForm = async (prevState, formData) => {
    try {
        connectToDb();
        const newTeamForm = new TeamForm(formData);

        await newTeamForm.save();
        console.log("saved to db");
        return { success: true };

    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};