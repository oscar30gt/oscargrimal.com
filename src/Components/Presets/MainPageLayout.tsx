import NavAside from "../Layout/NavAside/NavAside.tsx";
import MainContent from "../Layout/MainContent/MainContent.tsx";

function MainPageLayout({ children }: { children: React.JSX.Element | React.JSX.Element[] }) {
	return (
		<div className="app">
			<NavAside>
				<nav>
					<ul>
						<li className="current"><a href="/">Home</a></li>
						<li><a href="/stack/">Stack</a></li>
						<li><a href="/projects/">Builds</a></li>
						<li><a href="/blog/">Blog</a></li>
						<li><a href="/about/">About</a></li>
						<li><a href="/links/">Links</a></li>
					</ul>
				</nav>
			</NavAside>

			<MainContent>
				{children}
			</MainContent>
		</div>
	);
}

export default MainPageLayout;