import { Suspense } from "react";
import AdminUsers from "@/app/[userID]/components/adminUsers/adminUsers";
import AdminUserForm from "@/app/[userID]/components/adminUserForm/adminUserForm";


const users = () => {
  return (
    <div className=" flex gap-14">
      <Suspense fallback={<div>Loading...</div>}>
        <AdminUsers />
      </Suspense>

      <AdminUserForm />
    </div>
  )
}

export default users