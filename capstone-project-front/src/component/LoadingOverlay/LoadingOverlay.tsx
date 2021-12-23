// Component generated with util/vox-create-component.js
import React from "react";
import {LoadingOverlayWrapper} from "./LoadingOverlay.styled";
import {LoadingOverlayProps} from "./LoadingOverlay.types";
import {icons} from "./../../theme/icon";
import {UIText} from "./../../ui";

export const LoadingOverlay: React.VFC<LoadingOverlayProps> = ({
	message = "Carregando...",
	...args
}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	// Component
	const IconSVG = icons.loading;
	return (
		<LoadingOverlayWrapper {...args}>
			<div className="icon">
				<IconSVG />
			</div>
			<UIText preset="BODY_03" color="WHITE">
				{message}
			</UIText>
		</LoadingOverlayWrapper>
	);
};

export default LoadingOverlay;
