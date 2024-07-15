import RoomCard from "@/components/cards/RoomCard";
import SearchBar from "@/components/search-bar";
import { Button } from "@/components/ui/button";
import { getUserRooms } from "@/services/rooms";
import Link from "next/link";

import React from "react";
import UserRoomCard from "./UserRoomCard";
import { unstable_noStore } from "next/cache";

type Props = {};

async function YourRooms({}: Props) {
  unstable_noStore();
  const myRooms = await getUserRooms();
  return (
    <main className="lg:min-h-screen px-20 lg:px-24 mx-auto lg:py-12 ">
      <div className="lg:flex justify-between items-center mb-12 mt-12 lg:mt-2 ">
        {" "}
        <h1 className="text-4xl">My Rooms</h1>
        <Button asChild>
          <Link href={"/create-room"}>Create Room</Link>
        </Button>
      </div>

      <div className="lg:grid lg:grid-cols-3  lg:gap-4 ">
        {myRooms.map((room) => (
          <div key={room.id + "-card"} className="mb-4 lg:mb-0 ">
            <UserRoomCard room={room} key={room.id + "-card"}></UserRoomCard>
          </div>
        ))}
      </div>
    </main>
  );
}

export default YourRooms;
