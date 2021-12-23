// Component generated with util/create-component.js
import classnames from "classnames";
import styled from "styled-components";
import {IconStyleProps} from "./Icon.types";

/**
 * Components
 */
export const IconWrapper = styled.div.attrs<IconStyleProps>(({size, color, onClick}) => {
	const className = classnames({
		"w-3 h-3 xs": size === "xs",
		"icon w-4 h-4 sm": size === "sm",
		"w-6.5 h-6.5 md": size === "md",
		"fill-current text-primary": color === "PRIMARY",
		"fill-current text-secondary": color === "SECONDARY",
		"fill-current text-white": color === "WHITE",
		"fill-current text-red": color === "DANGER",
		"fill-current text-gray": color === "GREY",
		"fill-current text-gray-light": color === "LIGHTGREY",
		"fill-current text-gray-dark": color === "DARK",
		"fill-current text-blue": color === "BLUE",
		"fill-current text-green": color === "GREEN",
		"cursor-pointer": onClick,
	});
	return {
		className,
	};
})<IconStyleProps>`
	&.xs svg {
		width: 16px;
		height: 16px;
	}

	&.w-4 svg {
		width: 20px;
		height: 20px;
	}

	&.md svg {
		width: 30px;
		height: 30px;
	}

	&.fill-current svg * {
		fill: currentColor;
	}
`;
