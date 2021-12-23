module.exports = (componentName) => ({
  content: `// Component generated with util/vox-create-component.js
import React from "react";
import {render, screen, waitFor} from "../../../util/tests/test";
import {${componentName}} from "./${componentName}";

const ${componentName.toUpperCase()}_TEST_ID = "${componentName.toUpperCase()}_TEST_ID";

describe("${componentName} component", () => {
	it("should render component", async () => {
		render(<${componentName} data-testid={${componentName.toUpperCase()}_TEST_ID} />);
		const renderComponent = await waitFor(() => screen.getByTestId(${componentName.toUpperCase()}_TEST_ID));
		expect(renderComponent).toBeInTheDocument();
	});
});
`,
  extension: `.test.tsx`,
});
