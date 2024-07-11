import RoomCard from "@/components/cards/RoomCard";
import { Button } from "@/components/ui/button";

import { db } from "@/db";
import { getRooms } from "@/services/rooms";

import Link from "next/link";
import React from "react";

const Dashboard = async () => {
  const rooms = await getRooms();

  return (
    <main className="min-h-screen justify-between px-24 py-12 ">
      <div className="flex justify-between items-center mb-12 ">
        {" "}
        <h1 className="text-4xl">Dashboard</h1>
        <Button asChild>
          <Link href={"/create-room"}>Create Room</Link>
        </Button>
      </div>
      <div className="lg:grid lg:grid-cols-3  lg:gap-4 ">
        {rooms.map((room) => (
          <div className="mb-4 lg:mb-0 ">
            <RoomCard room={room} key={room.id}></RoomCard>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Dashboard;