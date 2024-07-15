"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteIcon, LogInIcon, LogOutIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
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
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { deleteAccountAction } from "../app/actions";
import Logo from "../../public/findev.png";
import DarkLogo from "../../public/darklogo.png";

function AccountDropdown() {
  const session = useSession();
  const [open, setOpen] = useState(false);

  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently remove your
              account and any data your have.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => {
                await deleteAccountAction();
                signOut({ callbackUrl: "/" });
              }}
            >
              Yes, delete my account
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"link"}>
            <Avatar className="mr-2">
              <AvatarImage src={session.data?.user?.image ?? ""} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {session.data?.user?.name}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
          >
            <LogOutIcon className="mr-2" /> Sign Out
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => {
              setOpen(true);
            }}
          >
            <DeleteIcon className="mr-2" /> Delete Account
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

function MenuIconDropdown({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"link"} className="text-white">
            <MenuIcon className="text-black dark:text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="flex flex-col gap-2 items-center">
            {isLoggedIn ? (
              <>
                <DropdownMenuItem>
                  <Link
                    className="hover:text-opacity-100 transition text-opacity-60 text-black dark:text-white"
                    href="/your-rooms"
                  >
                    Your Rooms
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="hover:text-opacity-100 transition text-opacity-60 text-black dark:text-white"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="hover:text-opacity-100 transition text-opacity-60 text-black dark:text-white"
                    href="/about"
                  >
                    About
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:text-opacity-100 text-opacity-60 transition text-black dark:text-white">
                  <Button
                    className="bg-white py-2 px-4 rounded-lg dark:text-black"
                    onClick={() =>
                      signOut({
                        callbackUrl: "/",
                      })
                    }
                    variant="link"
                  >
                    <LogInIcon className="mr-2" /> Sign Out
                  </Button>
                </DropdownMenuItem>
              </>
            ) : (
              <Button
                className="bg-white py-2 px-4 rounded-lg dark:text-black"
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                variant="link"
              >
                <LogInIcon className="mr-2" /> Sign In
              </Button>
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export function Header() {
  const session = useSession();
  const isLoggedIn = !!session.data;

  return (
    <header className="bg-gray-100 py-2 dark:bg-black z-10 relative">
      <div className="container mx-auto flex justify-between items-center ">
        <Link href="/">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-xl"></div>
            <Image
              className="hidden dark:block relative"
              src={DarkLogo}
              alt="dark-mode-image"
              width={40}
              height={40}
            />
            <Image
              className=" block dark:hidden relative"
              src={Logo}
              alt="light-mode-image"
              width={40}
              height={40}
            />
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <div className="border border-opacity-30 h-10 w-10 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-10 hover:border-opacity-40 dark:hover:bg-black dark:hover:bg-opacity-10 dark:hover:border-opacity-40 sm:hidden">
            {" "}
            <MenuIconDropdown isLoggedIn={isLoggedIn} />
          </div>

          <div
            className="lg:hidden md:hidden
      "
          >
            <ModeToggle />
          </div>
        </div>

        <div className="sm:flex items-center gap-4 hidden">
          <nav className="flex gap-6 items-center">
            {isLoggedIn && (
              <>
                <Link
                  className="hover:text-opacity-100 transition text-opacity-60 text-black dark:text-white dark:text-opacity-60 dark:hover:text-opacity-100"
                  href="/your-rooms"
                >
                  Your Rooms
                </Link>
                <Link
                  className="hover:text-opacity-100 text-opacity-60 transition text-black dark:text-white dark:text-opacity-60 dark:hover:text-opacity-100"
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </>
            )}
            <Link
              className="hover:text-opacity-100 text-opacity-60 transition text-black dark:text-white dark:text-opacity-60 dark:hover:text-opacity-100"
              href="/about"
            >
              About
            </Link>
          </nav>
          {isLoggedIn && <AccountDropdown />}
          {!isLoggedIn && (
            <Button
              className="bg-white py-2 px-4 rounded-lg dark:text-black"
              onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
              variant="link"
            >
              <LogInIcon className="mr-2" /> Sign In
            </Button>
          )}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
