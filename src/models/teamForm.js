import mongoose from "mongoose";

const singleFormSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        mobileNo: {
            type: String,
            required: true,
        },
        college: {
            type: String,
            required: true,
        },
        session: {
            type: String,
            required: true,
        },
        branch: {
            type: String,
            required: true,
        },
        eventId: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        fee: {
            type: Number,
        },
    },
    { timestamps: true }
);



export const SingleForm = mongoose.models?.SingleForm || mongoose.model("SingleForm", singleFormSchema);