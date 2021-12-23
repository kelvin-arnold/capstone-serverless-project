// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {TextInput} from "./TextInput";

const TEXTINPUT_TEST_ID = "TEXTINPUT_TEST_ID";

describe("TextInput component", () => {
	it("should render component", async () => {
		render(<TextInput data-testid={TEXTINPUT_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(TEXTINPUT_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
