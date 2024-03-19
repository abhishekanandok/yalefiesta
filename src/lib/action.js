"use server";

import { revalidatePath } from "next/cache";
import { Post, User } from "../models/user";
import { Event } from "../models/event";
import { connectToDb } from "./connectToDb";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";



export const addEvent = async (prevState,formData) => {
  const { title, description, eventRules, tags, category, eventDate, eventVenue, eventPrize, sponsors, linkPdf, linkImg, team } = formData;

  try {
    connectToDb();
    const newEvent = new Event({
      title,
      description,
      eventRules,
      tags,
      category,
      eventDate,
      eventVenue,
      eventPrize,
      sponsors,
      linkPdf,
      linkImg,
      team,
    });

    await newEvent.save();
    console.log("saved to db");
    return { success: true };
    
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const addPost = async (prevState,formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const addUser = async (prevState,formData) => {
  const { username, email, password, img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    console.log("saved to db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const handleLogout = async () => {
  "use server";
  await signOut();
};


export const register = async (previousState, formData) => {
  // console.log(formData);
  const { firstName, lastName, username, email, password, img, confirmPassword } =
    formData;

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDb();

    const userName = await User.findOne({ username });
    const userEmail = await User.findOne({ email });

    if (userName) {
      return { error: "Username already exists" };
    }
    if (userEmail) {
      return { error: "User already exists with this email" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};


export const login = async (prevState, formData) => {
  const { email, password } = formData;

  try {
    connectToDb();
    const user = await User.findOne({ email });
    if (!user) {
      return { error: "Account doesn't exists" };
    }
    await signIn("credentials", { email, password });

  } catch (err) {
    // console.log(err);
    if (!err.message.includes("NEXT_REDIRECT")) {
      return { error: "Invalid username or password" };
    }else{
      return { success: true };
    }
    // throw err;
  }
};
