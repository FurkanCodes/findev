export const parseTags = (tags: string | undefined) => {
  if (!tags) {
    return [];
  } else {
    return tags.split(",").map((tag) => tag.trim());
  }
};
