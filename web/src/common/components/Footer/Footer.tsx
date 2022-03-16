import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { DarkModeToggle } from "../../elements/DarkMode";

function Footer() {
  return (
    <footer className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <div>
          <span className="font-light">Copyright © Davide Marinotto</span>
        </div>
        <div>
          <span className="font-light">Look inside the hood on </span>
          <Link href={"https://github.com/mdavide99/portfolio"} passHref>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="underline decoration-2 decoration-blue-500 dark:decoration-fuchsia-500 underline-offset-8 hover:underline-offset-4"
            >
              github
            </a>
          </Link>
        </div>
        <div className="flex">
          <Link href={"https://github.com/mdavide99"} passHref>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="last:mr-0 mr-4 cursor-pointer hover:transition-all text-xl hover:text-blue-600 dark:hover:text-fuchsia-600 text-gray-500 dark:text-neutral-50"
            >
              <FaGithub />
            </a>
          </Link>

          <Link href={"https://www.linkedin.com/in/davide-marinotto/"} passHref>
            <a
              target="_blank"
              className="last:mr-0 mr-4 cursor-pointer hover:transition-all text-xl hover:text-blue-600 dark:hover:text-fuchsia-600 text-gray-500 dark:text-neutral-50"
            >
              <FaLinkedinIn />
            </a>
          </Link>

          <DarkModeToggle className="ml-2" />
        </div>
      </div>
    </footer>
  );
}

export { Footer };
