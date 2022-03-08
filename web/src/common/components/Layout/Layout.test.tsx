import { Layout } from "./Layout";
import { render } from "@testing-library/react";
import { Router } from "next/router";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            route: "/",
            pathname: "",
            query: "",
            asPath: "",
			events:{on: jest.fn}
        };
    },
}));

describe('Layout',()=>{
  it('renders Layout correctly', () => {
		const { container } = render(
		<Layout/>
		);
		expect(container).toMatchSnapshot();
	});
})