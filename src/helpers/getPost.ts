import { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";

const getPost = async (slug: string) => {
  const fullPath = path.join(process.cwd(), "data/posts", `${slug}.mdx`);
  const fileContents = readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
};

export default getPost;
