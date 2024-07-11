import TagList from "@/components/ui/tag-list";
import { getRoom } from "@/services/rooms";
import { parseTags } from "@/utils/util";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { DevVideoPlayer } from "./video-player";

async function RoomPage(props: { params: { roomId: string } }) {
  console.log("props", props);
  const roomId = props.params.roomId;
  const room = await getRoom(roomId);

  if (!roomId) {
    return <div>Room not found</div>;
  }

  return (
    <div className="grid grid-cols-4 min-h-screen ">
      <div className="col-span-3  p-4 pr-0">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-8">
          <DevVideoPlayer room={room!} />
        </div>
      </div>
      <div className="col-span-1  p-4 pl-2">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex flex-col gap-4 ">
          <h1 className="text-xl">{room?.name}</h1>
          {room?.githubRepo ? (
            <Link
              className="flex items-center gap-2"
              target="_blank"
              rel="noreferrer"
              href={room?.githubRepo}
            >
              <GitHubLogoIcon></GitHubLogoIcon>Github Repo Link
            </Link>
          ) : null}
          <p className="text-sm dark:text-white text-gray-500">
            {room?.description}
          </p>
          <TagList tags={parseTags(room?.tags)} />
        </div>
      </div>
    </div>
  );
}

export default RoomPage;
