// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Image} from "./Image";

const IMAGE_TEST_ID = "IMAGE_TEST_ID";

describe("Image component", () => {
	it("should render component", async () => {
		render(<Image data-testid={IMAGE_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(IMAGE_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
