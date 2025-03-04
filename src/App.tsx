import { BrowserRouter, Routes, Route } from "react-router-dom";

import { createRoot } from 'react-dom/client';

import "./index.css";
import Home from "./pages/home.tsx";
import React from "react";
import Blog from "./pages/blog.tsx";
import Links from "./pages/links.tsx";
import Projects from "./pages/projects.tsx";
// import Stack from "./pages/stack.tsx";
import About from "./pages/about.tsx";

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

export function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/blog" element={<Blog />} />
				{/* <Route path="/stack" element={<Stack />} /> */}
				<Route path="/about" element={<About />} />
				<Route path="/links" element={<Links />} />

				<Route path="/blog/article/:slug" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}