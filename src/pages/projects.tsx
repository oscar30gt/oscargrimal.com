import Grid from "../Components/Layout/Grid/Grid.tsx";
import MainPageLayout from "../Components/Presets/MainPageLayout.tsx";

import projectData from "../assets/projects.json";

import '../index.css';

export default function Projects() {
	return (
		<MainPageLayout currentPage="projects">
			<h1>Projects</h1>
			<Grid title="Recent Projects" content={Object.entries(projectData).map(([id, { title, description }]) => {
				return {
					title: title,
					description: description,
					image: `/markdown/projects/${id}/thumbnail_690x390.png`,
					href: `/projects/${id}/`
				};
			})} />
		</MainPageLayout>
	);
}