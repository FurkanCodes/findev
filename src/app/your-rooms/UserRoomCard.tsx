'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

import TagList from '@/components/ui/tag-list'
import { Room } from '@/db/schema'
import { parseTags } from '@/utils/util'
import { GitHubLogoIcon, Pencil1Icon } from '@radix-ui/react-icons'
import { TrashIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { deleteRoom } from './actions'
import { toast } from '@/components/ui/use-toast'

type Props = {}

const UserRoomCard = ({ room }: { room: Room }) => {
  return (
    <Card>
      <CardHeader className="relative">
        <Button
          size={'icon'}
          className="absolute right-1 top-1"
          onClick={() => {}}
          asChild
        >
          <Link href={`/edit-room/${room.id}`}>
            {' '}
            <Pencil1Icon />
          </Link>
        </Button>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {room.githubRepo ? (
          <Link
            className="flex items-center gap-2"
            target="_blank"
            rel="noreferrer"
            href={room?.githubRepo}
          >
            <GitHubLogoIcon />
            Github Repo Link
          </Link>
        ) : null}
        <TagList tags={parseTags(room?.tags)} />
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className="gap-2"
              variant={'destructive'}
              onClick={() => {}}
            >
              <TrashIcon />
              Delete Room
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                room and any data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => {
                  deleteRoom(room.id)
                  toast({
                    title: 'Room deleted',
                    description: 'Your room has been deleted',
                  })
                }}
              >
                Yes, Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  )
}

export default UserRoomCard
