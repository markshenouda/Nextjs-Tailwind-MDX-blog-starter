import type { NextPage } from "next";

const PostPage: NextPage = () => {
  return (
    <div>
      <article className="prose mx-auto my-16 dark:prose-invert lg:prose-xl">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolore
          deleniti perferendis, odit voluptatum asperiores vitae est saepe
          ullam. Magnam sit alias excepturi doloribus ducimus tempore porro, non
          dolores possimus?
        </p>

        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolore
          deleniti perferendis, odit voluptatum asperiores vitae est saepe
          ullam. Magnam sit alias excepturi doloribus ducimus tempore porro, non
          dolores possimus?
        </p>
        <pre>
          <code className="language-jsx">
            {`import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { usePosts } from "../../hooks/usePosts";
import { Post } from "../../components/Post";
import { PostPageQuery } from "../../types/PostPageQuery";
import { PostPage } from "../../types/PostPage";
import { usePostsQuery } from "../../hooks/usePostsQuery";`}
          </code>
        </pre>

        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel dolore
          deleniti perferendis, odit voluptatum asperiores vitae est saepe
          ullam. Magnam sit alias excepturi doloribus ducimus tempore porro, non
          dolores possimus? Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Vel dolore deleniti perferendis, odit voluptatum asperiores
          vitae est saepe ullam. Magnam sit alias excepturi doloribus ducimus
          tempore porro, non dolores possimus? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Vel dolore deleniti perferendis, odit
          voluptatum asperiores vitae est saepe ullam. Magnam sit alias
          excepturi doloribus ducimus tempore porro, non dolores possimus?
        </p>
      </article>
    </div>
  );
};

export default PostPage;
