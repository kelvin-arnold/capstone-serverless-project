// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Container} from "./Container";

const CONTAINER_TEST_ID = "CONTAINER_TEST_ID";

describe("Container component", () => {
	it("should render component", async () => {
		render(<Container data-testid={CONTAINER_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(CONTAINER_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
