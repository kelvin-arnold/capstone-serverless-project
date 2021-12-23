// Component generated with util/vox-create-component.js
import React, {useState} from "react";
import {UIText} from "../../ui";
import {TextareaWrapper, TextareaInput} from "./Textarea.styled";
import {TextareaProps} from "./Textarea.types";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({label, maxLength, error, ...args}, ref) => {
		// Context Here
		// States Here
		const [length, setLength] = useState<number>(0);
		// Effects Here
		// Handlers Here
		return (
			<TextareaWrapper>
				{label && (
					<UIText preset="BODY_02" color="GREY">
						{label}
					</UIText>
				)}
				<TextareaInput {...args} ref={ref} onChange={(e) => setLength(e.target.value.length)} />
				{maxLength && (
					<div className="text-right">
						<UIText preset="BODY_02" color="GREY">
							{length} / {maxLength}
						</UIText>
					</div>
				)}
				{error && (
					<UIText preset="BODY_03" color="DANGER">
						{error}
					</UIText>
				)}
			</TextareaWrapper>
		);
	},
);

export default Textarea;
