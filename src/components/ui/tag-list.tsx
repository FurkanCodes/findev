"use client";
import React from "react";
import { Badge, badgeVariants } from "./badge";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = { tags: string[] };

function TagList({ tags }: Props) {
  const router = useRouter();
  return (
    <div className="flex flex-wrap gap-2">
      {tags?.map((tag) => (
        <button
          onClick={() => {
            router.push(`/dashboard/?search=${tag}`);
          }}
          className={cn(badgeVariants())}
          key={tag}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default TagList;
