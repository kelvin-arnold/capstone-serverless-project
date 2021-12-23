import {FC, ReactElement} from "react";
import {render, RenderOptions} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

const AllProvider: FC = ({children}) => {
	const history = createMemoryHistory();
	return (
		<Router history={history}>{children}</Router>	
	);
};

const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'queries'>,
) => render(ui, {wrapper: AllProvider, ...options});

export * from "@testing-library/react";
export * from "@testing-library/jest-dom/extend-expect";

export {customRender as render, userEvent};
