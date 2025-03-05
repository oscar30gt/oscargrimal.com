import Grid from "../Components/Layout/Grid/Grid.tsx";
import MainPageLayout from "../Components/Presets/MainPageLayout.tsx";

import '../index.css';

export default function Projects() {
	return (
		<MainPageLayout currentPage="projects">
			<h1>Projects</h1>
			<Grid content={[
				{
					title: "Project 1",
					description: "Description 1",
					image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
					href: "#"
				},
				{
					title: "Project 2",
					description: "Description asd as da das d asdsa das da d asd asd as d 2",
					image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
					href: "#"
				},
				{
					title: "Project 2",
					description: "Description 2",
					image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
					href: "#"
				},
				{
					title: "Project asd as das d asd asddas das d ad a dsa d ad ad as d asd ad2",
					description: "Description 2",
					image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
					href: "#"
				},
				{
					title: "Project 2",
					description: "Description 2",
					image: "https://www.svgrepo.com/show/508699/landscape-placeholder.svg",
					href: "#"
				}
			]} />
		</MainPageLayout>
	);
}
