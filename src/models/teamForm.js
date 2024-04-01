import mongoose from "mongoose";

//schema for team members
const teamMemberSchema = new mongoose.Schema({
    name: { type: String, required: true },
    session: { type: String, required: true },
    branch: { type: String, required: true }
});


const teamFormSchema = new mongoose.Schema({
    eventId: { type: String, required: true },
    userId: { type: String, required: true },
    teamName: { type: String, required: true },
    leaderName: { type: String, required: true },
    email: { type: String, required: true },
    mobileNo: { type: String, required: true },
    altMobileNo: { type: String },
    college: { type: String, required: true },
    otherCollege: {
        type: String,
    },
    fee: { type: Number, required: true },
    teamMembers: [teamMemberSchema]
}, { timestamps: true });


export const TeamForm = mongoose.models?.TeamForm || mongoose.model("TeamForm", teamFormSchema);
