import { Post } from "@/models/user";
import { connectToDb } from "@/lib/connectToDb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();

    const posts = await Post.find();
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
