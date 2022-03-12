import { GetStaticProps, NextPage } from "next";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import { AwesomeRichText } from "../common/elements/AwesomeRichText";
import { AwesomeButton } from "../common/elements/AwesomeButton";
import { AwesomeTitle } from "../common/elements/AwesomeTitle";
import { AutoTyping } from "../common/elements/AutoTyping";
import { Container } from "../common/elements/Container";
import { Seo } from "../common/elements/Seo";
import client from "../client";
import { TimeLineItem } from "../common/elements/TimeLine";

interface Experience {
  title: string;
  subtitle: string;
  period: string;
  content: JSX.Element;
}
interface Education {
  title: string;
  subtitle: string;
  period: string;
  content: JSX.Element;
}
interface Props {
  experiences: Experience[];
  educations: Education[];
}

const Index: NextPage<Props> = ({ experiences, educations }) => {
  return (
    <>
      <Seo
        title={"Davide Marinotto"}
        description={
          "I'm a software engineer with diversified skills in many computer science and web development's branches."
        }
      />
      <Container>
        <div className="mb-16">
          <AwesomeTitle
            content={"Hello, I'm Davide Marinotto,"}
            className={"text-center"}
          />
          <div className="mx-auto lg:max-w-4xl">
            <div className="my-6">
              <p>
                I&apos;m a software engineer with diversified skills in many
                computer science and web development&apos;s branches.
              </p>
              <p>
                I feel like a true full-stack developer with good last front-end
                technology knowledge like react and equally deep design
                knowledge of back-end with trading framework like express.js
              </p>
              <p>
                I have also some experience in optimization and maintenance of
                existing systems developed in the most popular languages such as
                java.
              </p>

              <AutoTyping
                contents={["TypeScript", "Javascript", "React", "Express.js"]}
                speed={200}
              />
            </div>

            <div className="sm:flex py-2">
              <AwesomeButton
                content={"Download my CV"}
                href={"/files/davide-marinotto-cv.pdf"}
              >
                <FaAngleDown className="text-xl" />
              </AwesomeButton>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="lg:flex lg:flex-row-reverse lg:max-w-4xl lg:mx-auto mb-8">
            <AwesomeTitle
              content={"Experience"}
              size="md"
              className="text-center mx-auto md:mx-0 md:text-left w-3/4"
            />
          </div>
          <div>
            {experiences.map((experience: Experience) => (
              <TimeLineItem
                key={experience.title}
                title={experience.title}
                subTitle={experience.subtitle}
                period={experience.period}
              >
                <AwesomeRichText content={experience.content} />
              </TimeLineItem>
            ))}
          </div>

          <div className="lg:flex lg:max-w-4xl lg:justify-between lg:mx-auto">
            <div></div>
            <div className="lg:w-3/4">
              <AwesomeButton
                content={"Look at my projects"}
                isSolid={false}
                href={"/projects"}
              >
                <FaAngleRight className="text-xl" />
              </AwesomeButton>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="lg:flex lg:flex-row-reverse lg:max-w-4xl lg:mx-auto mb-8">
            <AwesomeTitle
              content={"Education"}
              size="md"
              className="text-center mx-auto md:mx-0 md:text-left w-3/4"
            />
          </div>
          {educations.map((edu: Experience) => (
            <TimeLineItem
              key={edu.title}
              title={edu.title}
              subTitle={edu.subtitle}
              period={edu.period}
            >
              <AwesomeRichText content={edu.content} />
            </TimeLineItem>
          ))}
        </div>
      </Container>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const experiences = (await client.fetch(`
  *[_type == "experience"] | order(priority asc) [0 ... 3]
  `)) as Experience[];
  const educations = (await client.fetch(`
  *[_type == "education"] | order(priority asc) [0 ... 2]
  `)) as Education[];
  return {
    props: {
      experiences,
      educations,
    },
  };
};

export default Index;
