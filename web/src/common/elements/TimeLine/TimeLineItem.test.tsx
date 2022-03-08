import { TimeLineItem } from "./TimeLineItem";
import { render } from "@testing-library/react";

describe("TimeLineItem", () => {
  it("renders TimeLineItem correctly", () => {
    const { container } = render(
      <TimeLineItem
        title={"Title"}
        subTitle={"SubTitle"}
        period={"from ... to ..."}
      >
        <p>Some Contents</p>
      </TimeLineItem>
    );
    expect(container).toMatchSnapshot();
  });
});
