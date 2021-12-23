// Component generated with util/vox-create-component.js
export enum Size {
	SMALL,
	NORMAL,
	MEDIUM,
}

export enum Color {
	PRIMARY,
	DARK,
	GRAY,
	WHITE,
	DANGER,
}

export type BadgeProps = {
	readonly size?: keyof typeof Size;
	readonly color?: keyof typeof Color;
};
