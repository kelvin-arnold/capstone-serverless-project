// Component generated with util/vox-create-component.js
import React from "react";
import {AuthCallbackWrapper} from "./AuthCallback.styled";
import {AuthCallbackProps} from "./AuthCallback.types";
import {AuthContext} from "./../../context/AuthContext";
import {useHistory} from "react-router-dom";
import * as auth from "./../../service/auth";

export const AuthCallback: React.VFC<AuthCallbackProps> = ({...args}) => {
	// Context Here
	const {setSession, clearSession} = React.useContext(AuthContext);
	const history = useHistory();
	// States Here
	// Effects Here
	React.useEffect(() => {
		if (/access_token|id_token|error/.test(history.location.hash)) {
			auth.handleAuthentication(clearSession, setSession);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [history]);
	// Handlers Here
	return (
		<AuthCallbackWrapper {...args}>
			<span>Loading...</span>
		</AuthCallbackWrapper>
	);
};

export default AuthCallback;
