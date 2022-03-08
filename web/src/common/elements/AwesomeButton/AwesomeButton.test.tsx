import { AwesomeButton } from "./AwesomeButton";
import { render } from "@testing-library/react";

describe("AwesomeButton", () => {
  it("renders AwesomeButton correctly", () => {
    const { container } = render(
      <AwesomeButton content={"Label"} href={"#"}>
        Button
      </AwesomeButton>
    );
    expect(container).toMatchSnapshot();
  });
});
