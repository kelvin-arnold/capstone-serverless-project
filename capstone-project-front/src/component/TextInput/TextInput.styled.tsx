// Component generated with util/create-component.js
import styled from "styled-components";
import classnames from "classnames";
import tw from "twin.macro";

type InputProps = {
	readonly error?: any;
	readonly icon?: any;
};

/**
 * Components
 */
export const TextInputWrapper = styled.div.attrs({
	className: `flex flex-col cursor-pointer`,
})``;

export const Icon = styled.div.attrs({
	className: `absolute right-2 bottom-2 bg-white rounded`,
})`
	/* right: 0;
	top: 50%; */
`;

export const Badge = styled(Icon)``;

export const InputWrapper = styled.div.attrs({className: `relative`})`
	input[type="file"]::file-selector-button {
		margin-top: 6px;
	}
	input[type="file"] {
		${tw`bg-white`}
	}
`;

export const Input = styled.input.attrs<InputProps>(({error}) => {
	const className = classnames({
		"w-full text-gray-dark rounded px-3 border rounded-lg border-gray-light border-opacity-60 focus:border-primary placeholder-gray-light disabled:border-gray-lightest disabled:bg-gray-lightest":
			true,
		"border-red": error,
	});
	return {
		className,
	};
})<InputProps>`
	height: 44px;
	&:focus {
		outline: none;
		box-shadow: none;
	}
`;
