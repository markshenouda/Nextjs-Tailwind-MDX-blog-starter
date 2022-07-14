import type { NextPage } from "next";
import Card from "@/components/Card";

const Home: NextPage = () => {
  return (
    <div className="p-16 ">
      <div className="mb-16 grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <Card
            title="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
            image="/demo.jpeg"
            slug="/test"
            readTime="6"
            description="Repudiandae illum aperiam debitis aut rem labore laboriosam praesentium sequi recusandae, hic error consequuntur nisi. Repellat totam itaque quis sit accusamus possimus."
          />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <Card
            title="Lorem ipsum dolor sit, amet consectetur."
            image="/demo.jpeg"
            slug="/test"
            readTime="6"
          />
          <Card
            title="Lorem ipsum dolor sit, amet consectetur."
            image="/demo.jpeg"
            slug="/test"
            readTime="6"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <Card
            title="Lorem ipsum dolor sit, amet consectetur elit."
            image="/demo.jpeg"
            slug="/test"
            readTime="6"
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
