"use server";

import { editRoom, getRoom } from "@/services/rooms";
import { Room } from "@/db/schema";
import { getSession } from "@/lib/auth";

import { redirect } from "next/navigation";

export async function editRoomAction(roomData: Omit<Room, "userId">) {
  const session = await getSession();
  console.log("session,session", session);
  if (!session) {
    throw new Error("you must be logged in to create this room");
  }

  const room = await getRoom(roomData?.id);

  if (room?.userId !== session.user.id) {
    throw new Error("you are not authorized to edit this room");
  }

  editRoom({ ...roomData, userId: room?.userId });
  redirect("/your-rooms");
}
