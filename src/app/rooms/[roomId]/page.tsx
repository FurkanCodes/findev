import TagList from '@/components/ui/tag-list'
import { getRoom } from '@/services/rooms'
import { parseTags } from '@/utils/util'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { DevVideoPlayer } from './video-player'
import { unstable_noStore } from 'next/cache'

async function RoomPage(props: { params: { roomId: string } }) {
  unstable_noStore()
  console.log('props', props)
  const roomId = props.params.roomId
  const room = await getRoom(roomId)

  if (!roomId) {
    return <div>Room not found</div>
  }

  return (
    <div className="container mx-auto min-h-screen px-4 py-6">
      <div className="flex flex-col-reverse gap-6 lg:flex-row">
        <div className="w-full lg:w-3/4">
          <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm md:p-6">
            <DevVideoPlayer room={room!} />
          </div>
        </div>
        <div className="mb-6 w-full lg:mb-0 lg:w-1/4">
          <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
            <h1 className="text-xl font-semibold">{room?.name}</h1>
            {room?.githubRepo && (
              <Link
                className="flex items-center gap-2 text-sm hover:underline"
                target="_blank"
                rel="noreferrer"
                href={room.githubRepo}
              >
                <GitHubLogoIcon />
                Github Repo Link
              </Link>
            )}
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {room?.description}
            </p>
            <TagList tags={parseTags(room?.tags)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomPage
