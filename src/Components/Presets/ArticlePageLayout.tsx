import MainContent from "../Layout/MainContent/MainContent.tsx";

function ArticlePageLayout({ children }: { children: React.JSX.Element | React.JSX.Element[]; }) {

	return (
		<div className="app articlePage">
			<MainContent>
				{children}
			</MainContent>
		</div>
	);
}

export default ArticlePageLayout;