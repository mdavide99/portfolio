import { NavBarItem } from "./NavBarItem";
import { render } from "@testing-library/react";
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn().mockReturnValue({
    route: "",
    pathname: "",
    query: "",
    asPath: "",
  }),
}));

jest.mock("next/link", () => {
  const React = require("react");
  return ({ children, href }: React.PropsWithChildren<{ href: string }>) =>
    React.cloneElement(React.Children.only(children), { href });
});
describe("NavBarItem", () => {
  it("renders NavBarItem correctly", () => {
    const { container } = render(<NavBarItem name={"TEST"} href={"#"} />);
    expect(container).toMatchSnapshot();
  });
});
