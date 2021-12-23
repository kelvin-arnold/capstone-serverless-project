import auth0, {WebAuth} from "auth0-js";
import {authConfig} from "../../config";

const auth: WebAuth = new auth0.WebAuth({
	domain: authConfig.domain,
	clientID: authConfig.clientId,
	redirectUri: authConfig.callbackUrl,
	responseType: "token id_token",
	scope: "openid",
});

const login = async () => {
	await auth.authorize();
};
const logout = (onSuccess: any) => {
	auth.logout({
		returnTo: window.location.origin,
	});
	onSuccess();
};
const handleAuthentication = (onError: any, onSuccess: (data: any) => void) => {
	auth.parseHash((error, authResult) => {
		if (error) {
			console.log("error: ", error);
			onError();
			return;
		}
		onSuccess(authResult);
	});
};
const renewSession = async () => {
	await auth.checkSession({}, (error, authResult) => {
		return {
			authResult,
			error,
		};
	});
};
const isAuthenticated = async (expiresAt: number) => new Date().getTime() < expiresAt;

export {login, logout, handleAuthentication, renewSession, isAuthenticated};
