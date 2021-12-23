// Component generated with util/vox-create-component.js
import React from "react";
import {TextWrapper} from "./Text.styled";
import {TextProps} from "./Text.types";

export const Text: React.FC<TextProps> = ({children, preset = "BODY", color = "DARK", ...args}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	return (
		<TextWrapper {...{preset, color}} {...args}>
			{children}
		</TextWrapper>
	);
};

export default Text;
