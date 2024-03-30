import React from 'react'
import SingleForm from "@/components/applyForm/singleForm"
import TeamForm from "@/components/applyForm/teamForm"
import { auth } from "@/lib/auth";
import { getUser } from "@/lib/data";



const getData = async (_id) => {
    const res = await fetch(`http://localhost:3000/api/event/${_id}`);

    if (!res.ok) {
        throw new Error("Something went wrong");
    }

    return res.json();
};



const applyForm = async ({ params }) => {
    const { _id } = params;
    const event = await getData(_id);
    const isTeam = event.team;
    const session = await auth();
    
    const user = await getUser(session.user.id);
    // console.log(session);

    return (
        <div className=' px-80'>
            {isTeam
                ? <TeamForm event={event} userData={{firstName: user.firstName, lastName: user.lastName, userId: session.user.id, email: user.email}}/>
                : <SingleForm event={event} userData={{firstName: user.firstName, lastName: user.lastName, userId: session.user.id, email: user.email}}/>
            }
        </div>
    )
}

export default applyForm