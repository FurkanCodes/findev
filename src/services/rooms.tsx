import { db } from "@/db";
import { Room, room } from "@/db/schema";
import { eq } from "drizzle-orm";
import { unstable_noStore } from "next/cache";

export async function createRoom(
  roomData: Omit<Room, "id" | "userId">,
  userId: string
) {
  const inserted = await db
    .insert(room)
    .values({ ...roomData, userId })
    .returning();
  return inserted[0];
}

export async function getRooms() {
  unstable_noStore();
  const rooms = await db.query.room.findMany();
  return rooms;
}

export async function getRoom(roomId: string) {
  unstable_noStore();
  return await db.query.room.findFirst({ where: eq(room.id, roomId) });
}
