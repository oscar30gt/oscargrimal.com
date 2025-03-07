import React from "react";

import "./MainContent.css";

/**
 * Main content section with markdown styling.
 */
function MainContent({ children }: { children: React.JSX.Element | React.JSX.Element[]; }) {

	return (
		<section className="mainContentContainer">
			<div className="mainContent markdown">
				{children}
				<Copyright />
			</div>
		</section>
	);
}

export default MainContent;

/**
 * Copyright footer visible on all pages.
 */
export function Copyright() {
	return (
		<footer>
			<p className="copyright">&copy; 2025 Óscar Grimal Torres. All rights reserved.</p>
		</footer>
	);
}