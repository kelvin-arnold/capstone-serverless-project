// Component generated with util/vox-create-component.js
export enum Preset {
	BODY_03, // Body 03
	BODY_02, // Body 02
	BODY, // Body
	BUTTON_02, // Button 02
	BUTTON, // Button
	HEADLINE_06, //  Headline 06
	HEADLINE_05, //  Headline 05
	HEADLINE, //  Headline 04
	HEADLINE_03, // Headline 03
	HEADLINE_02, // Headline 02
	HEADLINE_01, // Headline 01,
	SUBTITLE, // Subtitle
}

export enum Color {
	PRIMARY,
	SECONDARY,
	DANGER,
	GREY,
	WHITE,
	DARK,
	INHERIT,
	GREEN,
	LIGHTGREY,
}

export type TextProps = {
	readonly preset?: keyof typeof Preset;
	readonly color?: keyof typeof Color;
	readonly onClick?: (props: any) => void;
};
