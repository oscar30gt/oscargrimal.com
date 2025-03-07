import "./Buttons.css";

/**
 * Small link that takes the user back to the previous page.
 */
export function BackLink() {
	return (
		<a className="backLink" href={window.location.pathname.replace(/\/[^/]+\/?$/, "/")}>
            <i className="fi fi-rr-arrow-small-left"></i> Back
		</a>
	);
}