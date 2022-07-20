import { readdirSync, readFileSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

const getAllPostsData = () => {
  const files = readdirSync(join(process.cwd(), "data/posts"));
  const allPostsData = files.map((fileName) => {
    const slug = fileName.replace(".mdx", "");
    const fileContents = readFileSync(
      join(process.cwd(), "data/posts", `${slug}.mdx`),
      "utf8"
    );
    const { data } = matter(fileContents);
    return {
      slug,
      data,
    };
  });

  return allPostsData;
};

export default getAllPostsData;
