import { Suspense } from "react";
import AdminPosts from "@/app/[userID]/components/adminPosts/adminPosts";
import AdminPostForm from "@/app/[userID]/components/adminPostForm/adminPostForm";



const post = () => {
  return (
    <div className=" flex gap-10">
      <Suspense fallback={<div>Loading...</div>}>
        <AdminPosts />
      </Suspense>

      <AdminPostForm />
    </div>
  )
}

export default post