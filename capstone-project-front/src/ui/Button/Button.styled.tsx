// tslint:disable:indent
// Component generated with util/create-component.js
import styled from "styled-components";
import {preset} from "./Button.types";
import classNames from "classnames";

type ButtonProps = {
	bp: keyof typeof preset;
	outline?: boolean;
};
/**
 * Components
 */
export const ButtonWrapper = styled.button.attrs<ButtonProps>(({bp, disabled, outline}) => {
	const className = outline
		? classNames({
				"flex flex-row items-center justify-center": true,
				"border py-2 px-5 rounded-lg leading-tight min-w-button": true,
				"border-primary text-primary": bp === "PRIMARY",
				"border-secondary text-secondary": bp === "SECONDARY",
				"border-red text-red": bp === "DANGER",
				"border-gray text-gray": bp === "DARK",
		  })
		: classNames({
				"flex flex-row items-center justify-center": true,
				"py-2 px-5 rounded-lg leading-tight min-w-button": bp !== "LINK",
				"text-white": bp !== "SECONDARY" && bp !== "LINK",
				"bg-gray-disabled hover:bg-gray-disabled": disabled && bp !== "LINK",
				"bg-primary hover:bg-primary-light": bp === "DEFAULT",
				"bg-white border border-current text-primary hover:text-primary-light":
					bp === "SECONDARY" && !disabled,
				"border-current text-gray-disabled hover:text-gray-disabled hover:bg-white":
					bp === "SECONDARY" && disabled,
				"min-w-0 text-primary underline hover:text-primary-light": bp === "LINK" && !disabled,
				"bg-transparent text-gray-disabled hover:text-gray-disabled": bp === "LINK" && disabled,
				"bg-red hover:bg-red-light": bp === "DANGER",
				"bg-primary-dark hover:bg-primary": bp === "DARK",
		  });
	return {
		className,
	};
})<ButtonProps>`
	height: 44px;
	& svg * {
		fill: currentColor;
	}
`;
