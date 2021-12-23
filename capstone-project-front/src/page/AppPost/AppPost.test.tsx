// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppPost} from "./AppPost";

const APPPOST_TEST_ID = "APPPOST_TEST_ID";

describe("AppPost component", () => {
	it("should render component", async () => {
		render(<AppPost data-testid={APPPOST_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPPOST_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
