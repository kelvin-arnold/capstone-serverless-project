// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Textarea} from "./Textarea";

const TEXTAREA_TEST_ID = "TEXTAREA_TEST_ID";

describe("Textarea component", () => {
	it("should render component", async () => {
		render(<Textarea data-testid={TEXTAREA_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(TEXTAREA_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
