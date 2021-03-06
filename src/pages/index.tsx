import type { NextPage } from "next";
import Card from "@/components/Card";
import getAllPostsData from "@/helpers/getAllPostsData";

interface Props {
  posts: {
    slug: string;
    data: {
      [key: string]: any;
    };
    readTime: number;
  }[];
}

const Home: NextPage<Props> = ({ posts }) => {
  console.log(posts);
  return (
    <div className="p-16 ">
      <noscript>Hello you should turn on JavaScript</noscript>
      <div className="mb-16 grid grid-cols-3 gap-8">
        <div className="col-span-2">
          {posts[0] && (
            <Card
              title={posts[0].data.title}
              image={posts[0].data.image}
              slug={`/posts/${posts[0].slug}`}
              readTime={posts[0].readTime}
              description="Repudiandae illum aperiam debitis aut rem labore laboriosam praesentium sequi recusandae, hic error consequuntur nisi. Repellat totam itaque quis sit accusamus possimus."
            />
          )}
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          {posts.slice(1, 3).map((post) => (
            <Card
            key={post.slug}
              title={post.data.title}
              image={post.data.image}
              slug={`/posts/${post.slug}`}
              readTime={post.readTime}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {posts.slice(3).map((post) => (
          <Card
            key={post.slug}
            title={post.data.title}
            image={post.data.image}
            slug={`/posts/${post.slug}`}
            readTime={post.readTime}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = getAllPostsData();
  return {
    props: {
      posts,
    },
  };
};
