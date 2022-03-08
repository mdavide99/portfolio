import { GetStaticProps, NextPage } from "next";
import { AwesomeRichText } from "../common/elements/AwesomeRichText";
import { AwesomeTitle } from "../common/elements/AwesomeTitle";
import { TimeLineItem } from "../common/elements/TimeLine";
import client from "../client";

interface Project {
  title: string;
  subtitle: string;
  period: string;
  content: JSX.Element;
}

interface Props {
  projects: Project[];
}

const Projects: NextPage<Props> = ({ projects }) => {
  return (
    <>
      <div className="lg:flex lg:flex-row-reverse lg:max-w-4xl lg:mx-auto mb-8">
        <AwesomeTitle
          content={"My Projects"}
          className="text-center mx-auto md:mx-0 md:text-left w-3/4"
        />
      </div>
      {projects.map((project: Project) => (
        <TimeLineItem
          key={project.title}
          title={project.title}
          subTitle={project.subtitle}
          period={project.period}
        >
          <AwesomeRichText content={project.content} />
        </TimeLineItem>
      ))}
    </>
  );
};

const serializer = {
  marks: {
    link: ({
      mark,
      children,
    }: {
      mark: { blank: string; href: string };
      children: Element;
    }) => {
      const { blank, href } = mark;
      return blank ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          {children}
        </a>
      ) : (
        <a href={href} className="underline">
          {children}
        </a>
      );
    },
  },
};

export const getStaticProps: GetStaticProps = async (context) => {
  const projects = (await client.fetch(`
  *[_type == "experience"  &&  isProject == true] | order(priority asc)
  `)) as Project[];
  return {
    props: {
      projects,
    },
  };
};

export default Projects;
