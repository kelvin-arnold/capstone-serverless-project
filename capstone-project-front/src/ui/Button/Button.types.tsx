import {icons} from "../../theme/icon";

// Component generated with util/vox-create-component.js
export enum preset {
	DEFAULT,
	PRIMARY,
	SECONDARY,
	DARK,
	DANGER,
	LINK,
}
export type ButtonProps = {
	// Required
	readonly label: string;
	readonly onClick: (props?: any) => void;
	// Optional
	readonly preset?: keyof typeof preset;
	readonly disabled?: boolean;
	readonly icon?: keyof typeof icons;
	readonly loading?: boolean;
	readonly outline?: boolean;
};
