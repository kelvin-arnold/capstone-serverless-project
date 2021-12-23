// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Badge} from "./Badge";

const BADGE_TEST_ID = "BADGE_TEST_ID";

describe("Badge component", () => {
	it("should render component", async () => {
		render(<Badge data-testid={BADGE_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(BADGE_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
