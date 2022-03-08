import classNames from "classnames";
import Link from "next/link";
import { ReactNode } from "react";

export interface AwesomeButtonProps {
  content: string;
  href: string;
  isSolid?: boolean;
  children?: ReactNode;
}

function AwesomeButton(props: AwesomeButtonProps) {
  const isSolid = props.isSolid !== undefined ? props.isSolid : true;
  const btnClass = classNames(
    "flex items-center justify-center sm:justify-between w-full sm:w-56 rounded-full px-4 py-3 mr-5 font-semibold mb-3",
    {
      "bg-blue-500 hover:bg-blue-700 dark:bg-fuchsia-500 dark:hover:bg-fuchsia-700 text-neutral-50":
        isSolid,
    },
    {
      "text-blue-500 dark:text-fuchsia-500 border-2 border-blue-500 dark:border-fuchsia-500 hover:transition-all hover:duration-1000 gradient-50-blue dark:gradient-50-fuchsia bg-[length:200%_100%] bg-btn bg-[position:100%] hover:bg-[position:0_center] hover:text-neutral-50 dark:hover:text-neutral-50":
        !isSolid,
    }
  );

  return (
    <Link href={props.href}>
      <a className={btnClass}>
        {props.content}
        {props.children}
      </a>
    </Link>
  );
}

export { AwesomeButton };
