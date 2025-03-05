import Grid from "../Components/Layout/Grid/Grid.tsx";
import MainPageLayout from "../Components/Presets/MainPageLayout.tsx";

import projectData from "../assets/projects.json";

import '../index.css';

export default function Projects() {
	return (
		<MainPageLayout currentPage="projects">
			<h1>Projects</h1>
			<Grid content={projectData.projects.map(proj => {
				return {
					title: proj.title,
					description: proj.description,
					image: `/markdown/projects/${proj.identifier}/thumbnail_690x390.png`,
					href: `/projects/${proj.identifier}/`
				};
			})} />
		</MainPageLayout>
	);
}
