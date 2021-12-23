// Component generated with util/vox-create-component.js
import React from "react";
import {LayoutWrapper} from "./Layout.styled";
import {LayoutProps} from "./Layout.types";

export const Layout: React.FC<LayoutProps> = ({children, ...args}) => {
	return <LayoutWrapper {...args}>{children}</LayoutWrapper>;
};

export default Layout;
