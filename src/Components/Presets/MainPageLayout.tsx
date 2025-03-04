import NavAside from "../Layout/NavAside/NavAside.tsx";
import MainContent from "../Layout/MainContent/MainContent.tsx";

function MainPageLayout({ children, currentPage = "home" }: { children: React.JSX.Element | React.JSX.Element[], currentPage?: string; }) {

	const pages = [
		{ name: "Home", url: "/" },
		// { name: "Stack", url: "/stack/" },
		{ name: "Projects", url: "/projects/" },
		{ name: "Blog", url: "/blog/" },
		{ name: "About", url: "/about/" },
		{ name: "Links", url: "/links/" }
	];
	return (
		<div className="app mainPage">
			<NavAside>
				<nav>
					<ul>
						{pages.map((page, index) => (
							<li key={index} className={currentPage === page.name.toLowerCase() ? "current" : ""}>
								<a href={page.url}>{page.name}</a>
							</li>))}
					</ul>
				</nav>
			</NavAside>

			<MainContent>
				{children}
			</MainContent>
		</div>
	);
}

export default MainPageLayout;;;