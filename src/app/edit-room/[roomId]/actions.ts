'use server'

import { editRoom, getRoom } from '@/services/rooms'
import { Room } from '@/db/schema'
import { getSession } from '@/lib/auth'

import { redirect } from 'next/navigation'
import bcrypt from 'bcrypt'

export async function editRoomAction(roomData: Omit<Room, 'userId'>) {
  const session = await getSession()
  console.log('session,session', session)
  if (!session) {
    throw new Error('you must be logged in to create this room')
  }

  const room = await getRoom(roomData?.id)

  if (room?.userId !== session.user.id) {
    throw new Error('you are not authorized to edit this room')
  }
  let hashedPassword = null
  if (roomData.password) {
    hashedPassword = await bcrypt.hash(roomData.password, 10)
  }

  const roomWithHashedPassword = {
    ...roomData,
    password: hashedPassword,
  }

  editRoom({ ...roomWithHashedPassword, userId: room?.userId })
  redirect('/your-rooms')
}
