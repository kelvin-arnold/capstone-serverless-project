// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Layout} from "./Layout";

const LAYOUT_TEST_ID = "LAYOUT_TEST_ID";

describe("Layout component", () => {
	it("should render component", async () => {
		render(<Layout data-testid={LAYOUT_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(LAYOUT_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
