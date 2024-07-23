import RoomCard from "@/components/cards/RoomCard";
import SearchBar from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { getUserRooms } from "@/services/rooms";
import Link from "next/link";
import React from "react";
import UserRoomCard from "./UserRoomCard";
import { unstable_noStore } from "next/cache";
import { PlusIcon } from "lucide-react";

type Props = {};

async function YourRooms({}: Props) {
  unstable_noStore();
  const myRooms = await getUserRooms();
  return (
    <main className="  px-4 sm:px-6 md:px-8 lg:px-24 py-8 lg:py-12 container mx-auto  ">
      <div className="flex flex-row sm:flex-row justify-between items-center mb-8 mt-8 lg:mt-2">
        <h1 className="text-3xl sm:text-4xl lg:mb-4 sm:mb-0">My Rooms</h1>
        <Button asChild className="flex items-center">
          <Link href={"/create-room"} className="flex items-center">
            <span className="hidden sm:inline">Create Room</span>
        
            <PlusIcon className=" sm:hidden" />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {myRooms.map((room) => (
          <div key={room.id + "-card"}>
            <UserRoomCard room={room}></UserRoomCard>
          </div>
        ))}
      </div>
    </main>
  );
}

export default YourRooms;