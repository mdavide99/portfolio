import { DarkModeToggle } from "./DarkModeToggle";
import { render } from "@testing-library/react";

describe("DarkModeToggle", () => {
  it("renders DarkModeToggle correctly", () => {
    const { container } = render(<DarkModeToggle />);
    expect(container).toMatchSnapshot();
  });
});
