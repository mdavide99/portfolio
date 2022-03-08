import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

interface NavBarItemProps {
  name: string;
  href: string;
  className?: string;
}

function NavBarItem(props: NavBarItemProps) {
  const { asPath } = useRouter();
  const isActive =
    props.href === "/" ? asPath === "/" : asPath.startsWith(props.href);
  let linkClass = classNames(
    "text-4xl sm:text-base my-3 sm:my-0 mx-5 text-gray-500 dark:text-neutral-100 hover:text-gray-900 hover:dark:text-white hover:transition-color hover:underline decoration-blue-500 dark:decoration-fuchsia-500 decoration-4 sm:decoration-2 underline-offset-8",
    { "text-gray-900 underline": isActive }
  );

  return (
    <Link href={props.href}>
      <a className={linkClass}>{props.name}</a>
    </Link>
  );
}

export { NavBarItem };
