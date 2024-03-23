import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        eventRules: {
            type: String,
            required: true,
        },
        tags: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        eventDate: {
            type: Date,
            required: true,
        },
        eventVenue: {
            type: String,
            required: true,
        },
        eventPrize: {
            type: String,
        },
        regFee: {
            type: Number,
        },
        sponsors: {
            type: String,
        },
        linkPdf: {
            type: String,
            required: true,
        },
        linkImg: {
            type: String,
            required: true,
        },
        team: {
            type: Boolean,
            default: false,
        },
        //user id 
        //payment id array
    },
    { timestamps: true }
);



export const Event = mongoose.models?.Event || mongoose.model("Event", eventSchema);