'use client'
import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import type { User, Channel as StreamChannel } from 'stream-chat'
import {
  useCreateChatClient,
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react'

import 'stream-chat-react/dist/css/v2/index.css'

const apiKey = 'dz5f4d5kzrue'
const userId = 'red-poetry-8'
const userName = 'red'
const userToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoicmVkLXBvZXRyeS04IiwiZXhwIjoxNzIxOTU2OTU2fQ.508Hh-ocJBkXxe3Y-bvyIG1xei85hFYYhVN1KPcLDiU'

const ChatRoom = ({ roomId }: { roomId: string }) => {
  const [channel, setChannel] = useState<StreamChannel>()
  const session = useSession()
  const sessionUser = session.data?.user
  console.log('sessionUser', sessionUser)
  const user: User = {
    id: userId,
    name: userName,
    image: sessionUser?.image,
  }

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: userToken,
    userData: user,
  })

  useEffect(() => {
    if (!client) return
    const channelId = `room_${roomId}`
    const channel = client.channel('messaging', channelId, {
      name: `Room ${roomId} Chat`,
      // members: participants.map(p => p.id),
    })

    setChannel(channel)
  }, [client])

  if (!client) return <div>Setting up client & connection...</div>

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}

export default ChatRoom
