// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Text} from "./Text";

const TEXT_TEST_ID = "TEXT_TEST_ID";

describe("Text component", () => {
	it("should render component", async () => {
		render(<Text data-testid={TEXT_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(TEXT_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
