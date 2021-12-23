// Component generated with util/vox-create-component.js
import React from "react";
import {UIICon, UIText} from "..";
import {ButtonWrapper} from "./Button.styled";
import {ButtonProps} from "./Button.types";

export const Button: React.VFC<ButtonProps> = ({
	label,
	onClick,
	preset = "DEFAULT",
	icon,
	loading,
	...args
}) => {
	return (
		<ButtonWrapper {...{onClick: !loading ? onClick : () => {}, bp: preset}} {...args}>
			{icon && (
				<div className="mr-0.5">
					<UIICon name={icon} />
				</div>
			)}
			{loading ? (
				<div className="animate-spin">
					<UIICon name="loading" color="WHITE" />
				</div>
			) : (
				<UIText preset="BUTTON" color="INHERIT">
					{label}
				</UIText>
			)}
		</ButtonWrapper>
	);
};

export default Button;
