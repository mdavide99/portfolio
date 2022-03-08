import { ReactNode } from "react";

interface TimeLineItemProps {
  title: string;
  subTitle: string;
  period: string;
  children?: ReactNode;
}

function TimeLineItem(props: TimeLineItemProps) {
  return (
    <div className="lg:flex lg:justify-between lg:max-w-4xl mx-auto mb-8">
      <div className="mb-2 lg:w-52">
        <span className="font-light">{props.period}</span>
      </div>

      <div className="lg:w-3/4">
        <h3 className="text-xl leading-tight uppercase font-bold text-neutral-900 dark:text-white">
          {props.title}
        </h3>

        <h4 className="text-lg leading-tight font-medium my-2 md:my-1 text-neutral-600 dark:text-neutral-50">
          {props.subTitle}
        </h4>

        <div className="mb-4">{props.children}</div>
      </div>
    </div>
  );
}

export { TimeLineItem };
