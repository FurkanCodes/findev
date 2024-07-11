"use client";
import { Room } from "@/db/schema";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import {
  Call,
  CallControls,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { generateToken } from "./action";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;

export const DevVideoPlayer = ({ room }: { room: Room }) => {
  const session = useSession();
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);

  useEffect(() => {
    if (!session.data || !room) {
      return;
    }

    const userId = session.data.user?.id;
    const client = new StreamVideoClient({
      apiKey,
      user: { id: userId },
      tokenProvider: () => generateToken(),
    });

    setClient(client);

    const call = client.call("default", room.id);
    call.join({ create: true });
    setCall(call);

    return () => {
      call?.leave();
      client?.disconnectUser();
    };
  }, [session.data, room]);

  if (!client || !call) {
    return null;
  }

  return (
    <StreamVideo client={client}>
      <StreamTheme>
        <StreamCall call={call}>
          <SpeakerLayout />
          <CallControls />
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
};
