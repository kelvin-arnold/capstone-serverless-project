// Component generated with util/create-component.js
import styled from "styled-components";
import {BadgeProps} from "./Badge.types";
import classnames from "classnames";

/**
 * Components
 */
export const BadgeWrapper = styled.div.attrs<BadgeProps>(({size, color}) => {
	const className = classnames({
		"flex items-center justify-center px-0.5": true,
		"bg-gray-dark text-white": color === "DARK",
		"bg-gray-white text-gray-dark": color === "WHITE",
		"bg-primary text-white": color === "PRIMARY",
		"bg-red text-white": color === "DANGER",
		"bg-gray text-white": color === "GRAY",
	});
	return {
		className,
	};
})<BadgeProps>`
	&.small {
		width: fit-content;
		min-width: 20px;
		height: 20px;
		border-radius: 10px;
	}
	&.normal {
		width: fit-content;
		min-width: 24px;
		height: 24px;
		border-radius: 12px;
	}
	&.medium {
		width: fit-content;
		min-width: 32px;
		height: 32px;
		border-radius: 16px;
	}
`;
