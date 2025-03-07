import MainPageLayout from "../Components/Presets/MainPageLayout.tsx";

import '../index.css';

export default function About() {
	return (
		<MainPageLayout currentPage="about">
			<h1>About</h1>
			<p>
				Hi, my name is Óscar. I'm a self-taught developer with a strong passion for building efficient, scalable systems. Currently, I'm studying a degree in Computer Engineering, but my journey into software development began long before that.
			</p>
			<p>
				My first exposure to the world of programming was at the age of 9, when I discovered Scratch. I also used to code with Lego sets, which was one of my biggest passions as a child. At 15, I wanted to challenge myself with something more complex, so I started learning Python on my own. I find immense satisfaction in solving problems, whether it's optimizing code or designing systems that are both functional and maintainable. Since then, I've been constantly learning and improving my skills every day.
			</p>

			<h2>My Philosophy</h2>
			<p>
				I'm all about continuous learning, improvement, and sharing knowledge. I believe technology should be both accessible and powerful. Whether I'm working on a small tool or a large-scale system, I always strive to make it simple and scalable. This philosophy shapes not only my approach to coding but also my personal growth. I also love to share what I've learned with others: during high school, I even taught some programming classes to my own classmates.
			</p>

			<h2>Tech Stack</h2>
			<ul>
				<li><strong>Programming Languages:</strong> TypeScript, JavaScript, Python, C++, C#</li>
				<li><strong>Frameworks & Libraries:</strong> React, Electron, Node.js</li>
				<li><strong>Web Development:</strong> HTML, CSS</li>
				<li><strong>Version Control:</strong> Git, GitHub</li>
			</ul>

			<h2>Away From the Computer</h2>
			<p>
				Staying active is important to me, and I make time for it through regular gym sessions. It helps me clear my mind and stay energized. I've also been practicing basketball for years.
			</p>
			<p>
				Music is another passion of mine. Everything is better while listening to music. Some of my current favorite albums include <i>My Beautiful Dark Twisted Fantasy</i> and <i>Take Care</i>
			</p>

			<h2>Future Goals</h2>
			<p>
				I'm constantly seeking ways to grow and evolve, both personally and professionally. Here are a few things I'm working towards:
			</p>
			<ul>
				<li><strong>Open-source DeskUI:</strong> I plan to release DeskUI to the open-source community, inviting others to use, improve, and contribute.</li>
				<li><strong>Create more tutorials:</strong> I want to help others by sharing knowledge and providing resources for learning.</li>
				<li><strong>Contribute to open-source projects:</strong> Giving back to the community by supporting projects I admire is a key goal of mine. Although I'm not yet very familiar with contributing, I'm eager to learn and get involved.</li>

			</ul>

			<h2>Thank You!</h2>
			<p>
				As I continue to grow as a developer, my journey is just beginning. I'm focused on improving my skills, contributing to the community, and building projects that I'm passionate about. There's always something new to learn, and I'm excited to see where this path takes me.
			</p>

		</MainPageLayout>
	);
}
