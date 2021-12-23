import React from "react";
import Router from "./../router";
import {AuthProvider} from "./../context/AuthContext";
import {UILayout, UIContainer} from "./../ui";

function App() {
	return (
		<AuthProvider>
			<UIContainer>
				<UILayout>
					<Router />
				</UILayout>
			</UIContainer>
		</AuthProvider>
	);
}

export default App;
