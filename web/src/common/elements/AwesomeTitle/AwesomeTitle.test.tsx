import { AwesomeTitle } from "./AwesomeTitle";
import { render, screen } from "@testing-library/react";

describe("AwesomeTitle", () => {
  it("renders AwesomeTitle correctly", () => {
    const textToFind = "Hello World!";
    const { container } = render(<AwesomeTitle content={textToFind} />);
    const renderedText = screen.getByText(textToFind);
    expect(container).toMatchSnapshot();
    expect(renderedText).toBeInTheDocument();
  });
});
