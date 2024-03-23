import mongoose from "mongoose";



const applySchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true,
        },
        lastName:{
            type: String,
            required: true,
        },
        collegeName:{
            type: String,
            required: true
        },
        branch:{
            type: String,
            required: true
        },
        year:{
            type: String,
            required:true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            min: 5,
            max: 50,
        },
        contact: {
            type: Number,
            required: true
        },
        event: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Event'
            }
        ]


    }
)
export const Apply = mongoose.models?.Apply || mongoose.model("Apply", applySchema);