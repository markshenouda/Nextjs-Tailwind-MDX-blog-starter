import Link from "next/link";
import { BsMoon, BsGithub } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

function Header() {
  return (
    <div className="border-b">
      <header className="container mx-auto flex items-center justify-between py-8 text-2xl">
        <div className="flex items-center gap-3">
          <img
            src="/logo.jpeg"
            alt="My Blog"
            className="h-12 w-12 rounded-full"
          />
          <Link href="/">
            <a className="font-medium">My Blog</a>
          </Link>
        </div>
        <div className="flex gap-4 text-gray-600">
          <nav className="mr-8 flex gap-4 text-lg">
            <Link href="/">
              <a className="text-gray-600 hover:text-gray-900">Blog</a>
            </Link>
            <Link href="/">
              <a className="text-gray-600 hover:text-gray-900">About</a>
            </Link>
          </nav>
          <button className="text-gray-600 hover:text-gray-700">
            <BsMoon />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
