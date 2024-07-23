'use server'
import { createRoom, getRoom } from '@/services/rooms'
import { Room } from '@/db/schema'
import { getSession } from '@/lib/auth'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcrypt'

export async function createRoomAction(roomData: Omit<Room, 'id' | 'userId'>) {
  const session = await getSession()
  console.log('session,session', session)
  if (!session) {
    throw new Error('you must be logged in to create this room')
  }

  let hashedPassword = null
  if (roomData.password) {
    hashedPassword = await bcrypt.hash(roomData.password, 10)
  }

  const roomWithHashedPassword = {
    ...roomData,
    password: hashedPassword,
  }

  console.log('roomWithHashedPassword', roomWithHashedPassword)

  const room = await createRoom(roomWithHashedPassword, session.user.id)
  revalidatePath('/dashboard')
  return room
}

export async function checkRoomPassword(roomId: string, password: string) {
  const room = await getRoom(roomId)
  console.log('password', password)
  console.log('room', room)
  if (!room || !room.password) {
    throw new Error('Room not found or does not have a password set.')
  }
  const match = await bcrypt.compare(password, room.password)
  console.log('first', match)
  return match
}
