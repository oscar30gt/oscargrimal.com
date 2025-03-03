import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import DeskUIThumbnail from "../assets/Images/Projects/DeskUI/thumbnail.png";
import SyncedThumbnail from "../assets/Images/Projects/Synced/thumbnail.png";

import MainPageLayout from "../Components/Presets/MainPageLayout.tsx";
import { BlogWidget, LinkWidget, ThumbnailWidget } from "../Components/Content/Widgets.tsx";

import "../index.css";

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MainPageLayout>
			<h1>Welcome!</h1>

			<p>Hi, I’m <strong>Óscar</strong>, a self-taught <strong>Developer</strong> passionate about building efficient and scalable systems. Right now, my main focus is on <a href="#a">DeskUI</a>, a toolset for creating cross-platform desktop apps with React and Electron.</p>
			<p>At 19, I’m currently studying <strong>Computer Engineering</strong> at the University of Zaragoza.</p>

			<h2>Featured Projects</h2>
			<p>Some things I want to share with the world.</p>
			<ThumbnailWidget
				title="DeskUI"
				caption="A powerful library for building desktop apps with React and Electron."
				img={DeskUIThumbnail}
				url="/projects/deskui"
			/>

			<ThumbnailWidget
				title="Synced"
				caption="Easily translate your Unity games."
				img={SyncedThumbnail}
				url="/projects/project-alpha"
			/>

			<LinkWidget label="Explore all Projects" url="/projects" />

			<h2>Latest Posts</h2>
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
			<LinkWidget label="Full Blog" url="/blog" />

			<h2>About Me</h2>
			<p>I’ve always been driven by curiosity. Solving problems brings me joy, and I’m constantly exploring new ideas. Understanding how things work, whether in tech or in everyday life, fascinates me. When I’m not coding, I stay active with sports and enjoy relaxing with music. There’s always something new to learn.</p>

			<LinkWidget label="Read More" url="/about" />

			<h2>Stay Connected</h2>
			<p>You can find me on <a href="https://github.com/oscar30gt" target="_blank" rel="noopener noreferrer">GitHub</a> and <a href="https://www.reddit.com/user/Oscar30dev" target="_blank" rel="noopener noreferrer">Reddit</a>. Feel free to reach out! Here’s also my <a href="mailto:oscar30gt@gmail.com">mail</a>.</p>
		</MainPageLayout>
	</StrictMode>,
);
