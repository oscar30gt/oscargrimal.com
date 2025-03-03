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

export function SeeMoreLink({ label, url }: { label: string, url: string; }) {
	return (
		<a className="seeMoreLink blockLink" href={url}>
			<p >{label}</p>
			<i className="fi fi-rr-arrow-small-right"></i>
		</a>
	);
}

export function BlogEntry({ title, date, url }: { title: string, date: string, url: string; }) {
	return (
		<a className="blogEntry blockLink" href={url}>
			<h3>{title}</h3>
			<p>{date}</p>
		</a>
	);
}

export function ThumbnailEntry({ title, caption, img, url }: { title: string, caption: string, img: string, url: string; }) {
	return (
		<a className="thumbnailEntry blockLink" href={url}>
			<img src={img} alt="Thumbnail" />
			<div>
				<h3>{title}</h3>
				<p>{caption}</p>
			</div>
		</a>
	);
}

export function Copyright() {
	return (
		<footer>
			<p className="copyright">&copy; 2025 Óscar Grimal Torres. All rights reserved.</p>
		</footer>
	);
}