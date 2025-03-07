import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { createRoot } from 'react-dom/client';

import "./index.css";
import Home from "./pages/home.tsx";
import React from "react";
import Blog from "./pages/blog.tsx";
import Links from "./pages/links.tsx";
import Projects from "./pages/projects.tsx";
// import Stack from "./pages/stack.tsx";
import About from "./pages/about.tsx";
import BlogArticle from "./pages/blogArticle.tsx";
import ProjectPage from "./pages/projectPage.tsx";

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

/**
 * Main web component that handles routing to the different pages of the website.
 */
export function App() {
	return (
		<>
			<Analytics />
			
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/links" element={<Links />} />


					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/:slug" element={<ProjectPage />} />

					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:slug" element={<BlogArticle />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}