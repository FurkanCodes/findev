import React from "react";
import { Badge } from "./badge";

type Props = { tags: string[] };

function TagList({ tags }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags?.map((tag) => (
        <Badge className="w-fit" key={tag}>
          {tag}
        </Badge>
      ))}
    </div>
  );
}

export default TagList;
