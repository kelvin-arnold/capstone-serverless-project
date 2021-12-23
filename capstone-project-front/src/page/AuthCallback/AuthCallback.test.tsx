// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AuthCallback} from "./AuthCallback";

const AUTHCALLBACK_TEST_ID = "AUTHCALLBACK_TEST_ID";

describe("AuthCallback component", () => {
	it("should render component", async () => {
		render(<AuthCallback data-testid={AUTHCALLBACK_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(AUTHCALLBACK_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
