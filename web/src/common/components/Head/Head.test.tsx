import { Head } from "./Head";
import { render } from "@testing-library/react";

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
describe('Head',()=>{

  it('renders Head correctly', () => {

		const { container } = render(
		<Head/>
		);
		expect(container).toMatchSnapshot();
	});
})