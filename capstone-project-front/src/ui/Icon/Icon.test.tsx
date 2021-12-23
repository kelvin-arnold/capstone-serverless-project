// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {Icon} from "./Icon";

const ICON_TEST_ID = "ICON_TEST_ID";

describe("Icon component", () => {
	it("should render component", async () => {
		render(<Icon data-testid={ICON_TEST_ID} name="addCircle" />);
		const renderComponent = await waitFor(() => screen.getByTestId(ICON_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
