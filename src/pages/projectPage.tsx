import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";

import '../index.css';
import { BackLink } from "../Components/Content/Buttons.tsx";

import projectData from "../assets/projects.json";
import MainContent from "../Components/Layout/MainContent/MainContent.tsx";
import GeneratePageFromMarkdownFile from "../Scripts/markdownPage.ts";
import PageHeader from "../Components/Content/Header.tsx";

export default function ProjectPage() {
	const { slug } = useParams() as { slug: string; };

	const [articleFound, setArticleFound] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		getContent();
	});

	const getContent = async () => {
		const content = await GeneratePageFromMarkdownFile(`/markdown/projects/${slug}/project.md`);
		if (content === null) {
			setArticleFound(false);
			return;
		}

		setArticleFound(true);
		if (contentRef.current)
			contentRef.current.innerHTML = content;
	};

	// RENDER ==========================================================================================================

	if (!articleFound) return (
		<MainContent>
			<BackLink />
			<h1>Page not found</h1>
			<p>The article you are looking for does not exist.</p>
		</MainContent>
	);

	type ProjectKey = keyof typeof projectData;
	const project = projectData[slug as ProjectKey];

	return (
		<MainContent>
			<PageHeader
				title={project.title}
				image={project.fancyHeader ? `/markdown/projects/${slug}/banner_2480x700.png` : undefined}
				linkList={project.links}
				themeColor={project.themeColor}
			/>

			<div ref={contentRef} />

			<div className="box technicalData">
				<h3>Project Details</h3>
				<p><i className="fi fi-rr-filter"></i><strong>Category:&nbsp;</strong>{project.technicalDetails.type}</p>
				<p><i className="fi fi-rr-settings"></i><strong>Technologies:&nbsp;</strong>{project.technicalDetails.languagesAndTechnolgies}</p>
				<p><i className="fi fi-rr-rotate-reverse"></i><strong>Status:&nbsp;</strong>{project.technicalDetails.status}</p>
				<p><i className="fi fi-rr-calendar-lines"></i><strong>Year:&nbsp;</strong>{project.technicalDetails.year}</p>
				<p><i className="fi fi-rr-clock-three"></i><strong>Duration:&nbsp;</strong>{project.technicalDetails.duration}</p>
			</div>

		</MainContent>
	);
}