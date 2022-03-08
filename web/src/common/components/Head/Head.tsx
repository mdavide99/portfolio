import Link from "next/link";
import { NavBar } from "../../elements/Navigation";

function Head() {
  return (
    <div id="head" className="container flex items-center justify-between mx-auto px-4 h-20 mb-10">
      <div id="logo" className="flex items-center text-3xl sm:text-4xl font-extrabold group">
        <Link href={"/"} passHref={true}>
          <a>
            <span className="group-hover:text-neutral-50 dark:group-hover:text-neutral-900 group-hover:transition-colors duration-1000 delay-75 group-hover:duration-500 group-hover:ease-linear">
              {"// "}
            </span>
            <span className="group-hover:text-blue-500 dark:group-hover:text-fuchsia-500 group-hover:transition-colors duration-1000 delay-75 group-hover:duration-500 group-hover:ease-linear tracking-wide">
              Davide
            </span>
          </a>
        </Link>
      </div>

      <NavBar />
    </div>
  );
}

export { Head };
