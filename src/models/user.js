import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      min: 5,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      // required: true,
    },
    img: {
      type: String,
      //use cloudinaray
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isSponser: {
      type: Boolean,
      default: false,
    },
    isCR: {
      type: Boolean,
      default: false,
    },
    isCoordinator: {
      type: Boolean,
      default: false,
    },
    collegeName: {
      type: String,
    },
    branch: {
      type: String,
    },
    collegeID: {
      type: Number,
      max: 20,
    },
    sessionYear: {
      type: Number,
      min: 6,
      max: 6,
    },
  },
  { timestamps: true }
);








const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
  // timestamps create creation date
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);