module.exports = (componentName) => ({
  content: `// Component generated with util/vox-create-component.js
import React from "react";
import {${componentName}Wrapper} from "./${componentName}.styled";
import {${componentName}Props} from "./${componentName}.types";

export const ${componentName}: React.VFC<${componentName}Props> = ({...args}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	return (
		<${componentName}Wrapper {...args}>
			<span>${componentName}</span>
		</${componentName}Wrapper>
	);
};

export default ${componentName};
`,
  extension: `.tsx`,
});
