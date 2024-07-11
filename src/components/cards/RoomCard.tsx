import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Room } from "@/db/schema";
import { parseTags } from "@/utils/util";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "../ui/button";
import TagList from "../ui/tag-list";

type Props = {};

const RoomCard = ({ room }: { room: Room }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {room.githubRepo ? (
          <Link
            className="flex items-center gap-2 "
            target="_blank"
            rel="noreferrer"
            href={room?.githubRepo}
          >
            <GitHubLogoIcon></GitHubLogoIcon>Github Repo Link
          </Link>
        ) : null}
        <TagList tags={parseTags(room?.tags)} />
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
