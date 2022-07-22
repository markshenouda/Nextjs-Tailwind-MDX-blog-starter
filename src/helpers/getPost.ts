import { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";
import getReadTime from "./getReadTime";

const getPost = async (slug: string) => {
  const fullPath = path.join(process.cwd(), "data/posts", `${slug}.mdx`);
  const fileContents = readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  const readTime = getReadTime(content);
  return {
    data,
    content,
    readTime,
  };
};

export default getPost;
