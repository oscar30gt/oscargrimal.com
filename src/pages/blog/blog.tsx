import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import MainPageLayout from "../../Components/Presets/MainPageLayout.tsx";
import { BlogWidget } from "../../Components/Content/Widgets.tsx";

import '../../index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MainPageLayout currentPage="blog">
			<h1>Blog</h1>

			<BlogWidget
				title="Back at it: what’s coming to DeskUI"
				date="March 2025"
				url="/blog/deskui-impact"
			/>
			<BlogWidget
				title="How learning assembly made me a better developer"
				date="February 2025"
				url="/blog/scalable-systems"
			/>
			<BlogWidget
				title="Big projects can turn into your biggest nightmare"
				date="February 2025"
				url="/blog/scalable-systems"
			/>
			<BlogWidget
				title="Welcome to my new website!"
				date="February 2025"
				url="/blog/scalable-systems"
			/>

		</MainPageLayout>

	</StrictMode>,
);
