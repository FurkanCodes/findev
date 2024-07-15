"use server";

import { getSession } from "@/lib/auth";
import { deleteUserRoom, getRoom } from "@/services/rooms";
import { revalidatePath } from "next/cache";

export async function deleteRoom(roomId: string) {
  const session = await getSession();
  if (!session) {
    throw new Error("No user id found");
  }
  const room = await getRoom(roomId);

  if (room?.userId !== session?.user?.id) {
    throw new Error("You are not authorized to delete this room");
  }
  await deleteUserRoom(roomId);

  revalidatePath("/your-rooms");
}
