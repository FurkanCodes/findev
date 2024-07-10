import { ModeToggle } from "@/components/mode-toggle";
import { db } from "@/db";
import Image from "next/image";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 ">
      <h1 className="text-4xl font-bold">
        A place where you can find developers to code with.
      </h1>

      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
              <div className="flex flex-col items-center justify-center">
                Currently Work in Progress Auth works, database is set up, and
                users can create rooms. Video stream is not working yet. But it
                is coming soon!
              </div>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </main>
  );
}
