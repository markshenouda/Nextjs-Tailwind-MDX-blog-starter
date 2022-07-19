import Link from "next/link";

interface Props {
  title: string;
  description?: string;
  image: string;
  slug: string;
  readTime: string;
}

function Card({ title, description, image, slug, readTime }: Props) {
  return (
    <Link href={slug}>
      <a>
        <div className="m-2">
          <img
            src={image}
            alt=""
            className={` w-full rounded-xl object-cover ${
              description ? "h-[500px]" : "h-56"
            }`}
          />
          <h2 className="mt-2 text-2xl font-bold">{title}</h2>
          <p className="mt-4 text-xl text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </a>
    </Link>
  );
}

export default Card;
