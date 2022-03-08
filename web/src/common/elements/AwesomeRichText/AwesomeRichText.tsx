import classNames from "classnames";
import BlockContent from "@sanity/block-content-to-react";

interface AwesomeRichTextProps {
  content: JSX.Element;
}

const serializers = {
  marks: {
    link: ({
      mark,
      children,
    }: {
      mark: { blank: string; href: string };
      children: Element;
    }) => {
      const linkClass = classNames(
        "underline decoration-2 decoration-blue-500 dark:decoration-fuchsia-500 underline-offset-4 hover:underline-offset-2"
      );
      const { href } = mark;
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {children}
        </a>
      );
    },
    tec: ({ children }: { children: Element }) => {
      const linkClass = classNames("font-light");
      return <span className={linkClass}>{children}</span>;
    },
  },
};

function AwesomeRichText(props: AwesomeRichTextProps) {
  return <BlockContent blocks={props.content} serializers={serializers} />;
}

export { AwesomeRichText };
