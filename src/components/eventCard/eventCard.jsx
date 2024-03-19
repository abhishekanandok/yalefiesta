import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"



export default function EventCard({event}) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{event.title}</CardTitle>
        
      </CardHeader>
      <CardContent>
        <Image 
        src={event.linkImg}
        height={300}
        width={400}
        alt={event.title}
        className=" rounded-md pb-2 max-h-52 min-h-52"
         ></Image>
      <CardDescription className=" truncate">{event.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/events/${event._id}`} ><Button>Details</Button></Link>
      </CardFooter>
    </Card>
  )
}
