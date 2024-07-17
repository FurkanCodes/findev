import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { Button } from "./ui/button";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%, #A46EDB_82%)] py-20">
      <div className="container">
        <div className="flex items-center justify-center">
          <Link
            href={"/create-room"}
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2)] bg-clip-text text-transparent">
              Version 1 is Here
            </span>
            <span>Read More</span>
          </Link>
        </div>
        {/* <h1>Code together, code better.</h1>
        <p> A place where you can find developers to code with.</p> */}

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-full mt-2 dark:text-neutral-300"
            >
              <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
                <h1 className="text-4xl font-bold">
                  A place where you can find developers to code with.
                </h1>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>{" "}
      {/* <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="60"
            className="text-neutral-500 text-sm max-w-full mt-2 dark:text-neutral-300"
          >
            <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
              <h1 className="text-4xl font-bold">
                A place where you can find developers to code with.
              </h1>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer> */}
    </div>
  );
}

export default Hero;
