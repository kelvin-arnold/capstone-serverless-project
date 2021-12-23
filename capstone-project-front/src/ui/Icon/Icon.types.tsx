// Component generated with util/vox-create-component.js

import {icons} from "../../theme/icon";

export enum Color {
	PRIMARY,
	SECONDARY,
	DANGER,
	GREY,
	WHITE,
	DARK,
	INHERIT,
	BLUE,
	GREEN,
	LIGHTGREY,
}

export type Size = "xs" | "sm" | "md";

export type IconProps = IconStyleProps & {
	readonly name: keyof typeof icons;
	readonly onClick?: (props?: any) => void;
};

export type IconStyleProps = {
	color?: keyof typeof Color;
	size?: Size;
};
