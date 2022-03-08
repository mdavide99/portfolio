import classNames from "classnames";

interface AwesomeTitleProps {
  content: String;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function AwesomeTitle(props: AwesomeTitleProps) {
  let size: "sm" | "md" | "lg";
  if (typeof props.size === "undefined") {
    size = "lg";
  } else {
    size = props.size;
  }

  let titleClass = classNames(
    props.className,
    "font-extrabold  text-transparent bg-clip-text bg-gradient-to-t from-blue-600 to-blue-400  dark:bg-gradient-to-t dark:from-fuchsia-600 dark:to-fuchsia-400",
    "text-4xl sm:leading-tight sm:text-5xl sm:leading-tight mb-2 sm:mb-3"
  );

  switch (size) {
    case "sm":
      return <h3 className={titleClass}>{props.content}</h3>;

    case "md":
      return <h2 className={titleClass}>{props.content}</h2>;

    default:
      return <h1 className={titleClass}>{props.content}</h1>;
  }
}

export { AwesomeTitle };
