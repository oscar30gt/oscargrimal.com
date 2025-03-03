import React from "react";

import "./MainContent.css";

/**
 * @summary ---
 *
 * @component
 * @param {Object} props React component props.
 */
function MainContent({ children }: { children: React.JSX.Element | React.JSX.Element[]; }) {
	//#region STATE AND VARIABLES

	//#endregion STATE AND VARIABLES


	//#region FUNCTIONS

	//#endregion FUNCTIONS


	//#region RENDER
	return (
		<section className="mainContentContainer">
			<div className="mainContent">
				{children}
				<Copyright />
			</div>
		</section>
	);
	//#endregion RENDER
}

export default MainContent;

export function Copyright() {
	return (
		<footer>
			<p className="copyright">&copy; 2025 Óscar Grimal Torres. All rights reserved.</p>
		</footer>
	);
}