// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AppHome} from "./AppHome";

const APPHOME_TEST_ID = "APPHOME_TEST_ID";

describe("AppHome component", () => {
	it("should render component", async () => {
		render(<AppHome data-testid={APPHOME_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(APPHOME_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
