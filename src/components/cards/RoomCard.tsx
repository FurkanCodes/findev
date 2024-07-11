import { Room } from "@/db/schema";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

type Props = {};

const RoomCard = ({ room }: { room: Room }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
        <CardDescription>{room.description}</CardDescription>
      </CardHeader>
      <CardContent>
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
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/your-rooms/${room.id}`}>Join Room</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
