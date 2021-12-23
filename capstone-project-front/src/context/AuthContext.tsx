import React, {createContext, useState, useEffect} from "react";
import * as auth from "./../service/auth";

export interface IAuthContextData {
	appLoading: boolean;
	signed: boolean;
	accessToken: string | null;
	removeSession: () => void;
	setSession: (authResult: any) => void;
	clearSession: () => void;
}

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

export const AuthProvider: React.FC = ({children}) => {
	// States
	const [signed, setSigned] = useState<boolean>(false);
	const [accessToken, setAccessToken] = useState<string | null>(null);
	const [appLoading, setAppLoading] = useState<boolean>(true);
	// Effects
	useEffect(() => {
		(async () => {
			const storageToken = await localStorage.getItem("@Auth:accessToken");
			const idToken = await localStorage.getItem("@Auth:idToken");
			const expiresAt = await localStorage.getItem("@Auth:expiresAt");
			if (storageToken && idToken && expiresAt && auth.isAuthenticated(parseFloat(expiresAt))) {
				setAccessToken(storageToken);
				setSigned(true);
			}
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve(true);
				}, 2000),
			);
			setAppLoading(false);
		})();
	}, [signed]);
	// removeSession
	const removeSession = async () => {
		localStorage.clear();
		setSigned(false);
	};
	// setSession
	const setSession = async (authResult: any) => {
		localStorage.setItem("@Auth:accessToken", authResult.accessToken);
		localStorage.setItem("@Auth:idToken", authResult.idToken);
		localStorage.setItem(
			"@Auth:expiresAt",
			authResult.expiresIn * 1000 + new Date().getTime().toString(),
		);
		setSigned(true);
	};
	// clearSession
	const clearSession = () => {
		localStorage.removeItem("@Auth:accessToken");
		localStorage.removeItem("@Auth:idToken");
		localStorage.removeItem("@Auth:expiresAt");
		setSigned(false);
	};
	return (
		<AuthContext.Provider
			value={{
				signed,
				removeSession,
				accessToken,
				appLoading,
				setSession,
				clearSession,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
