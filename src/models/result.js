import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        eventId: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);



export const Result = mongoose.models?.Result || mongoose.model("Result", resultSchema);