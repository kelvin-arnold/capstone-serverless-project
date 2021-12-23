// Component generated with util/vox-create-component.js
import React from "react";
import {BadgeWrapper} from "./Badge.styled";
import {BadgeProps} from "./Badge.types";
import {UIText} from "./../";

export const Badge: React.FC<BadgeProps> = ({
	children,
	size = "NORMAL",
	color = "DARK",
	...args
}) => {
	// Context Here
	// States Here
	// Effects Here
	// Handlers Here
	return (
		<BadgeWrapper
			{...{color, size}}
			{...args}
			className={size === "SMALL" ? "small" : size === "NORMAL" ? "normal" : "medium"}>
			<UIText
				color="INHERIT"
				preset={size === "SMALL" ? "BODY_03" : size === "NORMAL" ? "BODY_02" : "BODY"}>
				{children}
			</UIText>
		</BadgeWrapper>
	);
};

export default Badge;
