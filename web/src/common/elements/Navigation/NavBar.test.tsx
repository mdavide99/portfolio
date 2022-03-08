import { NavBar } from "./NavBar";
import { render } from "@testing-library/react";
import { useEffect } from "react";

jest.mock("React", () => ({
  ...jest.requireActual("React"),
  useEffect: jest.fn(),
}));

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
describe("NavBar", () => {
  it("renders NavBar correctly", () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });
});
