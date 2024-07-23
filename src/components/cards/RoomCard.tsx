'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Room } from '@/db/schema'
import { parseTags } from '@/utils/util'
import { GitHubLogoIcon, LockClosedIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Button } from '../ui/button'
import TagList from '../ui/tag-list'
import { Label } from '@radix-ui/react-dropdown-menu'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '../ui/dialog'
import { Input } from '../ui/input'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

import { checkRoomPassword } from '@/app/create-room/actions'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'

const formSchema = z.object({
  password: z.string().min(1).max(50),
})

const RoomCard = ({ room }: { room: Room }) => {
  const router = useRouter()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('first', values)
    const roomId = room.id

    const isValid = await checkRoomPassword(roomId, values.password)
    console.log('isValid', isValid)

    if (isValid) {
      router.push(`/rooms/${roomId}`)
      toast({
        duration: 3000,
        title: 'Joined Room',
        description: 'You have joined the room.',
      })
    } else {
      toast({
        duration: 3000,
        title: 'Invalid password',
        variant: 'destructive',
        description: 'Please try again.',
      })
    }
  }

  return (
    <Card>
      <CardHeader>
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
            <GitHubLogoIcon></GitHubLogoIcon>Github Repo Link
          </Link>
        ) : null}
        {room.password ? (
          <div className="flex items-center gap-2 border-l-4 border-red-500 bg-red-700 px-2 py-1">
            <LockClosedIcon></LockClosedIcon>
            <span>Password Protected</span>
          </div>
        ) : null}
        <TagList tags={parseTags(room?.tags)} />
      </CardContent>
      <CardFooter>
        <Button asChild>
          {room.password ? (
            <Dialog>
              <DialogTrigger asChild>
                <Button>Join Room</Button>
              </DialogTrigger>
              <DialogContent className="w-[80%] sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Type in the room password</DialogTitle>
                  <DialogDescription>
                    You can only join this room if you know the password
                  </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                  <div className="grid flex-1 gap-2">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                      >
                        <FormField
                          control={form.control}
                          name="password"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="password"
                                  placeholder="Password"
                                  id="password"
                                />
                              </FormControl>
                              <FormDescription>
                                Type a password to join this room
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button type="submit" variant="secondary">
                          Join Room
                        </Button>
                      </form>
                    </Form>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <Link href={`/rooms/${room.id}`}>Join Room</Link>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default RoomCard
