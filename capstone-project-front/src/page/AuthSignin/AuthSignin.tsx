// Component generated with util/vox-create-component.js
import React from "react";
import {AuthSigninWrapper} from "./AuthSignin.styled";
import {AuthSigninProps} from "./AuthSignin.types";
import {UIButton} from "./../../ui";
import {AuthContext} from "./../../context/AuthContext";
import * as auth from "./../../service/auth";

export const AuthSignin: React.VFC<AuthSigninProps> = ({...args}) => {
	// Context Here
	const {setSession} = React.useContext(AuthContext);
	// Validations
	// States Here
	// Effects Here
	// Handlers Here
	const login = () => {
		auth.login();
	};
	// Component
	return (
		<AuthSigninWrapper {...args}>
			<div>
				<UIButton onClick={login} label="login" />
			</div>
		</AuthSigninWrapper>
	);
};

export default AuthSignin;
