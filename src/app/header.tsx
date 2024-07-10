"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

type Props = {};

function Header({}: Props) {
  const session = useSession();
  console.log(session);
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      {session?.data ? (
        <Button onClick={() => signOut()}>Logout</Button>
      ) : (
        <Button onClick={() => signIn("google")}>Sign In</Button>
      )}
      <ModeToggle />
    </div>
  );
}

export default Header;
