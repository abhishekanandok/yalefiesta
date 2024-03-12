import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar2"

export default function AvatarDemo() {
  return (
    <div className=" pl-40 pr-40">
      <h1 className=" text-3xl font-bold text-center p-5">Meet Our Developer Team</h1>
      <div className=" flex gap-60">
      <div className=" ">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/112304737?v=4" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h5 className=" font-bold">Abhishek Anand</h5>
      </div>
      <div className=" ">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/112304737?v=4" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h5 className=" font-bold">Abhishek Anand</h5>
      </div>
      <div className=" ">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/112304737?v=4" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h5 className=" font-bold">Abhishek Anand</h5>
      </div>
      </div>
    </div>
  )
}
