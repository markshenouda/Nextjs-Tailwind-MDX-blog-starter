import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import getPost from "@/helpers/getPost";
import getAllPostsData from "@/helpers/getAllPostsData";
import remarkGfm from 'remark-gfm';
import { serialize } from "next-mdx-remote/serialize";

interface Props {
  data: [key: string, value: any];
  content: MDXRemoteSerializeResult;
}

const PostPage: NextPage<Props> = ({ data, content }) => {
  return (
    <div>
      <article className="prose mx-auto my-16 dark:prose-invert lg:prose-xl">
        <MDXRemote {...content} />
      </article>
    </div>
  );
};

export default PostPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPostsData();
  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if(!params) {
    return { props: { data: [], content: {} } };
  }
  const { content, data } = await getPost(params.slug as string);
  return {
    props: {
      content: await serialize(content, {
        mdxOptions: {
          remarkPlugins: [remarkGfm]
        },
      }),
      data,
    },
  };
};