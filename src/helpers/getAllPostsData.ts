import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import getReadTime from "./getReadTime";

const getAllPostsData = () => {
  const files = readdirSync(join(process.cwd(), "data/posts"));
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = readFileSync(
      join(process.cwd(), "data/posts", `${slug}.mdx`),
      "utf8"
    );
    const { data, content } = matter(fileContents);
    const readTime = getReadTime(content);
    return {
      slug,
      data,
      readTime,
    };
  });

  return allPostsData;
};

export default getAllPostsData;
