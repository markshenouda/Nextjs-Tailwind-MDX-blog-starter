import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  title: string;
  description?: string;
  image: string;
  slug: string;
  readTime: number;
}

function Card({ title, description, image, slug, readTime }: Props) {
  return (
    <Link href={slug}>
      <a>
        <div className="m-2">
          <div className={clsx("w-full relative", description ? 'h-[500px]' : 'h-64')}>
          <Image
            src={image}
            alt=""
            className={`  rounded-xl object-cover`}
            layout="fill"
          />
          </div>
          <h2 className="mt-4 text-2xl font-bold">{title}</h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
}

export default Card;
