import React from "react";
import Memoji from "../../../assets/Images/Common/Memoji.webp";

import "./NavAside.css";

function NavAside({ children }: { children: React.JSX.Element | React.JSX.Element[]; }) {
	//#region STATE AND VARIABLES
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	//#endregion STATE AND VARIABLES

	//#region FUNCTIONS
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	//#endregion FUNCTIONS

	//#region RENDER
	return (
		<>
			<aside className={`navAside ${isMenuOpen ? "open" : "closed"}`}>
				<section className="titleSec">
					<img className="profilePic" src={Memoji} alt="Me" />
					<h1>Óscar Grimal Torres</h1>
					<h2>Developer / Student</h2>
				</section>
				{children}
			</aside>
			<div
				className="showMenuButton"
				role="button"
				tabIndex={0}
				onClick={toggleMenu}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ")
						toggleMenu();
				}}>
				<i className="fi fi-tr-angle-up"></i>
			</div>
		</>
	);
	//#endregion RENDER
}

export default NavAside;