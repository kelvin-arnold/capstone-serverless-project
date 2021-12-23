import React, {useContext} from "react";
import {BrowserRouter, Switch, Route, Redirect, RouteProps} from "react-router-dom";
import AuthContext from "./../context/AuthContext";
import {UIButton} from "./../ui";
import * as Pages from "./../page";
import * as auth from "./../service/auth";

const PrivateRouter: React.FC<RouteProps> = ({children, ...args}) => {
	const {signed} = useContext(AuthContext);
	return (
		<Route
			{...args}
			render={({location}) =>
				signed ? (
					children
				) : (
					<Redirect
						to={{
							pathname: "/AuthSignIn",
							state: {from: location},
						}}
					/>
				)
			}
		/>
	);
};

const Router: React.VFC = () => {
	const {signed, appLoading, clearSession} = useContext(AuthContext);
	const logout = () => auth.logout(clearSession);
	if (appLoading) {
		return (
			<div className="app-container flex w-full justify-center items-center bg-gray-lightest">
				<span>Loading...</span>
			</div>
		);
	}
	if (signed) {
		return (
			<BrowserRouter>
				<div className="app-container flex w-full bg-gray-lightest">
					<div className="app-content flex flex-col w-full">
						<div className="p-7 flex justify-center">
							<div className="w-8/12">
								<div className="w-full flex flex-row justify-end">
									<UIButton label="logout" preset="DANGER" onClick={logout} />
								</div>
								<hr className="my-7 py-0 border-gray-disabled" />
								<div className="w-full pb-7">
									<Switch>
										{/* Private routes */}
										<PrivateRouter path="/AppHome" component={Pages.AppHome} />
										<PrivateRouter path="/AppPost/:postid/:post?" component={Pages.AppPost} />
										<Route component={() => <Redirect to="/AppHome" />} />
									</Switch>
								</div>
							</div>
						</div>
					</div>
				</div>
			</BrowserRouter>
		);
	}
	return (
		<BrowserRouter>
			<Switch>
				{/* Public routes */}
				<Route path="/AuthSignIn" component={Pages.AuthSignIn} />
				<Route path="/AuthCallback" component={Pages.AuthCallback} />
				<Route component={() => <Redirect to="/AuthSignIn" />} />
			</Switch>
		</BrowserRouter>
	);
};

export default Router;
