import MainPageLayout from "../Components/Presets/MainPageLayout.tsx";

import '../index.css';
import { IconLinkWidget } from "../Components/Content/Widgets.tsx";

export default function Links() {
	return (
		<MainPageLayout currentPage="links">
			<h1>Links</h1>
			<IconLinkWidget
				title="GitHub"
				url="https://github.com/oscar30gt"
				icon="fi-brands-github"
			/>
			<IconLinkWidget
				title="Reddit"
				url="https://www.reddit.com/user/Oscar30dev"
				icon="fi-brands-reddit"
			/>
			{/* 
			<IconLinkWidget
				title="X"
				url=""
				icon="fi-brands-twitter-alt"
			/> */}
			<IconLinkWidget
				title="Mail"
				url="mailto:oscar30gt@gmail.com"
				icon="fi-tr-at"
			/>
		</MainPageLayout>
	);
}