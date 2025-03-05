import MainPageLayout from "../Components/Presets/MainPageLayout.tsx";
import { LinkWidget } from "../Components/Content/Widgets.tsx";

import "../index.css";
import BlogList from "../Components/Presets/BlogList.tsx";
import ProjectList from "../Components/Presets/ProjectList.tsx";

export default function Home() {
	return (
		<MainPageLayout>
			<h1>Welcome!</h1>

			<p>Hi, I'm <strong>Óscar</strong>, a self-taught <strong>Developer</strong> passionate about building efficient and scalable systems. Right now, my main focus is on <a className="inlineLink" href="/projects/deskui">DeskUI</a>, a toolset for creating cross-platform desktop apps with React and Electron.</p>
			<p>At 19, I'm currently studying <strong>Computer Engineering</strong> at the University of Zaragoza.</p>

			<h2>Featured Projects</h2>
			<p>Some things I want to share with the world.</p>
			<ProjectList />

			<LinkWidget label="Explore all Projects" url="/projects/" />

			<h2>Latest Posts</h2>
			<BlogList limit={3} />
			<LinkWidget label="Full Blog" url="/blog/" />

			<h2>About Me</h2>
			<p>I've always been driven by curiosity. Solving problems brings me joy, and I'm constantly exploring new ideas. Understanding how things work, whether in tech or in everyday life, fascinates me. When I'm not coding, I stay active with sports and enjoy relaxing with music. There's always something new to learn.</p>

			<LinkWidget label="Read More" url="/about/" />

			<h2>Stay Connected</h2>
			<p>You can find me on <a className="inlineLink" href="https://github.com/oscar30gt" target="_blank" rel="noopener noreferrer">GitHub</a> and <a className="inlineLink" href="https://www.reddit.com/user/Oscar30dev" target="_blank" rel="noopener noreferrer">Reddit</a>. Feel free to reach out! Here's also my <a className="inlineLink" href="mailto:oscar30gt@gmail.com">mail</a>.</p>
		</MainPageLayout>
	);
}
