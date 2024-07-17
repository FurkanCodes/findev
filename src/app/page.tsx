import Hero from "@/components/hero";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { db } from "@/db";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default async function Home() {
  const rooms = await db.query.room.findMany();
  return (
    <main>
      <Hero />
    </main>
  );
}
