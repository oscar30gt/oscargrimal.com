import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import MainPageLayout from "../../Components/Presets/MainPageLayout.tsx";

import '../../index.css';
import { IconLinkWidget } from "../../Components/Content/Widgets.tsx";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
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
			<IconLinkWidget
				title="Mail"
				url="mailto:oscar30gt@gmail.com"
				icon="fi-tr-at"
			/>
		</MainPageLayout>
	</StrictMode>,
);
