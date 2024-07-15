import { db } from "@/db";
import { Room, room } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { eq, like } from "drizzle-orm";

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

export async function editRoom(roomData: Room) {
  await db.update(room).set(roomData).where(eq(room.id, roomData.id));
}

export async function getRooms(search: string) {
  const where = search ? like(room.tags, `%${search}%`) : undefined;
  const rooms = await db.query.room.findMany({
    where,
  });
  return rooms;
}

export async function getUserRooms() {
  const session = await getSession();

  if (!session) {
    throw new Error("No user id found");
  }

  const rooms = await db.query.room.findMany({
    where: eq(room.userId, session?.user?.id),
  });
  return rooms;
}

export async function getRoom(roomId: string) {
  return await db.query.room.findFirst({ where: eq(room.id, roomId) });
}

export async function deleteUserRoom(roomId: string) {
  return await db.delete(room).where(eq(room.id, roomId));
}
