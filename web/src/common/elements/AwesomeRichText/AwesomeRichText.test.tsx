import { AwesomeRichText } from "./AwesomeRichText";
import { render } from "@testing-library/react";

describe("AwesomeRichText", () => {
  it("renders AwesomeRichText correctly", () => {
    const { container } = render(<AwesomeRichText content={<p>TEST</p>} />);
    expect(container).toMatchSnapshot();
  });
});
