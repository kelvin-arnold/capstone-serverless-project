// Component generated with util/create-component.js
import styled from "styled-components";
import tw from "twin.macro";

/**
 * Components
 */
export const LoadingOverlayWrapper = styled.div.attrs({
	className: `flex flex-col items-center justify-center bg-gray bg-opacity-70 fixed z-50`,
})`
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	& .icon {
		width: 72px;
		height: 72px;
		${tw`fill-current text-secondary animate-spin`}
		& svg {
			fill: "currentColor";
		}
	}
`;
