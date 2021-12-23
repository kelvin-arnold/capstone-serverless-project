// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {AuthSignin} from "./AuthSignin";

const AUTHSIGNIN_TEST_ID = "AUTHSIGNIN_TEST_ID";

describe("AuthSignin component", () => {
	it("should render component", async () => {
		render(<AuthSignin data-testid={AUTHSIGNIN_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(AUTHSIGNIN_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
