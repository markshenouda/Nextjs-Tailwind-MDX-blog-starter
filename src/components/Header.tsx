import Link from "next/link";
import { BsMoon, BsSun } from "react-icons/bs";
import { useTheme, Theme } from "@/contexts/ThemeContext";

function Header() {
  const [theme, switchTheme] = useTheme();

  return (
    <div className="border-b dark:border-gray-800">
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
        <div className="flex gap-4 text-gray-600 dark:text-gray-300">
          <nav className="mr-8 flex gap-4 text-lg">
            <Link href="/">
              <a className="hover:text-gray-900 dark:hover:text-gray-100">
                Blog
              </a>
            </Link>
            <Link href="/">
              <a className="hover:text-gray-900 dark:hover:text-gray-100">
                About
              </a>
            </Link>
          </nav>
          <button
            className="hover:text-gray-700 dark:hover:text-gray-100"
            onClick={switchTheme}
            title="Toggle Theme"
          >
            {theme === Theme.LIGHT ? <BsMoon /> : <BsSun />}
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
