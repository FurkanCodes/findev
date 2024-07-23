import RoomCard from '@/components/cards/RoomCard'
import SearchBar from '@/components/search-bar'
import { Button } from '@/components/ui/button'
import { getRooms } from '@/services/rooms'
import { PlusIcon } from 'lucide-react'
import { unstable_noStore } from 'next/cache'
import Link from 'next/link'

const Dashboard = async ({
  searchParams,
}: {
  searchParams: { search: string }
}) => {
  unstable_noStore()
  const rooms = await getRooms(searchParams.search)

  return (
    <main className="container mx-auto px-4 py-8 sm:px-6 md:px-8 lg:px-24 lg:py-12">
      <div className="mb-8 mt-8 flex items-center justify-between lg:mt-2">
        <h1 className="text-3xl sm:mb-0 sm:text-4xl">Dashboard</h1>
        <Button asChild className="flex items-center">
          <Link href={'/create-room'} className="flex items-center">
            <span className="hidden sm:inline">Create Room</span>

            <PlusIcon className="sm:hidden" />
          </Link>
        </Button>
      </div>
      <div className="mb-8">
        <SearchBar />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map(room => (
          <div key={room.id + '-card'}>
            <RoomCard room={room}></RoomCard>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Dashboard
