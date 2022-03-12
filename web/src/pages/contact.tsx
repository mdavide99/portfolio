import { NextPage } from "next";
import Link from "next/link";
import { Container } from "../common/elements/Container";
import { AwesomeTitle } from "../common/elements/AwesomeTitle";
import { AwesomeButton } from "../common/elements/AwesomeButton";
import { FaAngleRight, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { Seo } from "../common/elements/Seo";

const Contact: NextPage = () => {
  return (
    <>
      <Seo title={"Contact - Davide Marinotto"} description={"Get in Touch"} />
      <Container>
        <div className="mx-auto max-w-fit mb-40">
          <div className="mb-8 lg:mb-4">
            <AwesomeTitle content={"Get in Touch"} />
          </div>

          <div className="max-w-prose">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 dark:bg-fuchsia-500 text-neutral-50">
                <FaEnvelope className="text-xl" />
              </div>
              <span className="text-lg font-light ml-4 select-all">
                info@davidemarinotto.com
              </span>
            </div>

            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 dark:bg-fuchsia-500 text-neutral-50">
                <FaLinkedinIn className="text-xl" />
              </div>
              <Link
                href={"https://www.linkedin.com/in/davide-marinotto/"}
                passHref
              >
                <a
                  target="_blank"
                  className="text-lg font-light hover:font-medium ml-4 underline decoration-2 hover:decoration-4 decoration-blue-500 dark:decoration-fuchsia-500 hover:transition-all hover:duration-500 cursor-pointer"
                >
                  Davide Marinotto
                </a>
              </Link>
            </div>

            <p className="my-8">
              I am available to work on your projects.
              <br />
              I&apos;ll try my best to get back to you!
            </p>

            <AwesomeButton
              content={"Contact me"}
              isSolid={false}
              href={"mailto:info@davidemarinotto.com"}
            >
              <FaAngleRight className="text-xl" />
            </AwesomeButton>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
