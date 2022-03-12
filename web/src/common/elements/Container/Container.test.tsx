import { Container } from "./Container";
import { render } from "@testing-library/react";

describe("Seo", () => {
  it("renders Seo correctly", () => {
    const { container } = render(<Container>TEST</Container>);
    expect(container).toMatchSnapshot();
  });
});
