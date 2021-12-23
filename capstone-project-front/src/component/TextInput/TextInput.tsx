// Component generated with util/vox-create-component.js
import React from "react";
import {TextInputWrapper, InputWrapper, Input, Icon, Badge} from "./TextInput.styled";
import {TextInputProps} from "./TextInput.types";
import {UIText, UIICon, UIBadge} from "./../../ui";

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
	(
		{
			label,
			disabled,
			error,
			help,
			placeholder,
			type = "text",
			icon,
			onClick = () => {},
			badge,
			...args
		},
		ref,
	) => {
		// Context Here
		// States Here
		// Effects Here
		// Handlers Here
		return (
			<TextInputWrapper data-name="text-input">
				{label && (
					<div className="mb-0.5">
						<UIText preset="BODY_02" color="GREY">
							{label}
						</UIText>
					</div>
				)}
				<InputWrapper onClick={onClick}>
					<Input {...{placeholder, type, disabled, error}} ref={ref} {...args} />
					{icon && (
						<Icon>
							<UIICon name={icon} color="PRIMARY" />
						</Icon>
					)}
					{!!badge && (
						<Badge>
							<UIBadge color="GRAY">{badge}</UIBadge>
						</Badge>
					)}
				</InputWrapper>
				{error && (
					<UIText preset="BODY_03" color="DANGER">
						{error}
					</UIText>
				)}
			</TextInputWrapper>
		);
	},
);

export default TextInput;
