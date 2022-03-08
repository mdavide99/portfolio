import { AutoTyping } from "./AutoTyping";
import { render } from "@testing-library/react";

describe("AutoTyping", () => {
  it("renders AutoTyping correctly", () => {
    const { container } = render(
      <AutoTyping contents={["test_01", "test_02"]} />
    );
    expect(container).toMatchSnapshot();
  });
});
