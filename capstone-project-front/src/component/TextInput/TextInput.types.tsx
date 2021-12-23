// Component generated with util/vox-create-component.js
import {icons} from "../../theme/icon";
export enum InputType {}
export type TextInputProps = {
	readonly label?: string;
	readonly error?: string;
	readonly help?: string;
	readonly placeholder?: string;
	readonly disabled?: boolean;
	readonly icon?: keyof typeof icons;
	readonly badge?: number;
	readonly onClick?: () => void;
	readonly autoFocus?: boolean;
	readonly isFocus?: boolean;
	readonly value?: any;
	readonly type?:
		| "date"
		| "datetime-local"
		| "email"
		| "number"
		| "password"
		| "reset"
		| "search"
		| "tel"
		| "text"
		| "file";
};
