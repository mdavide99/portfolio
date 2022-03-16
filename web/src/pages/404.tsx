import { NextPage } from "next";
import { Container } from "../common/elements/Container";
import { AwesomeTitle } from "../common/elements/AwesomeTitle";
import { AwesomeButton } from "../common/elements/AwesomeButton";
import { FaAngleRight} from "react-icons/fa";

const error404: NextPage = () => {
  return (
    <>
      <Container>
        <div className="mx-auto max-w-fit mb-40">
          <div className="mb-8 lg:mb-4">
            <AwesomeTitle content={"404 - This page could not be found."} />
          </div>

          <div className="max-w-prose">

            <AwesomeButton
              content={"Back to Home"}
              isSolid={false}
              href={"/"}
            >
              <FaAngleRight className="text-xl" />
            </AwesomeButton>
          </div>
        </div>
      </Container>
    </>
  );
};

export default error404;
