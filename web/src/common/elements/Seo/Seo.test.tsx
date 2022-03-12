import { Seo } from "./Seo";
import { render } from "@testing-library/react";

describe("Seo", () => {
  it("renders Seo correctly", () => {
    const { container } = render(<Seo title={""} description={""}/>);
    expect(container).toMatchSnapshot();
  });
});
