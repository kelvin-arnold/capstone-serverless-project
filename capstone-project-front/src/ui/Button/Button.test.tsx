// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Button} from "./Button";

const BUTTON_TEST_ID = "BUTTON_TEST_ID";

describe("Button component", () => {
	it("should render component", async () => {
		render(<Button data-testid={BUTTON_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(BUTTON_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
