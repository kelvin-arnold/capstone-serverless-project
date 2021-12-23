// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {LoadingOverlay} from "./LoadingOverlay";

const LOADINGOVERLAY_TEST_ID = "LOADINGOVERLAY_TEST_ID";

describe("LoadingOverlay component", () => {
	it("should render component", async () => {
		render(<LoadingOverlay data-testid={LOADINGOVERLAY_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(LOADINGOVERLAY_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
