import { collections } from "@content/config";
import { getCollection } from "astro:content";

type CollectionNames = keyof typeof collections;

export const getContents = async () => {
  const dirs = Object.keys(collections) as Array<CollectionNames>;
  
  if (!dirs) return [];

  return await Promise.all(
    dirs.map((dir) => getCollection(dir))
  ).then((results) => results.flat());
}