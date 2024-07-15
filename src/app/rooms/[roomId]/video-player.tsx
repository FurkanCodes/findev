"use client";
import { Room } from "@/db/schema";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import {
  Call,
  CallControls,
  CallParticipantsList,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-sdk";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { generateToken } from "./action";
import { useRouter } from "next/navigation";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY!;

export const DevVideoPlayer = ({ room }: { room: Room }) => {
  const session = useSession();
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const router = useRouter();
  useEffect(() => {
    if (!session.data || !room) {
      return;
    }

    const userId = session.data.user?.id;
    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: userId,
        name: session.data.user?.name ?? undefined,
        image: session.data.user?.image! ?? undefined,
      },

      tokenProvider: () => generateToken(),
    });

    setClient(client);

    const call = client.call("default", room.id);
    call.join({ create: true });
    setCall(call);

    return () => {
      call
        ?.leave()
        .then(() => {
          client?.disconnectUser();
        })
        .catch(console.error);
    };
  }, [session.data, room]);

  if (!client || !call) {
    return null;
  }

  return (
    <StreamVideo client={client}>
      <StreamTheme>
        <StreamCall call={call}>
          <CallParticipantsList
            onClose={function (): void {
              undefined;
            }}
          />
          <SpeakerLayout />
          <CallControls
            onLeave={() => {
              router.push("/dashboard");
            }}
          />
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
};
