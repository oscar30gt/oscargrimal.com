import BlogList from "../Components/Presets/BlogList.tsx";
import MainPageLayout from "../Components/Presets/MainPageLayout.tsx";

import '../index.css';

export default function Blog() {
	return (
		<MainPageLayout currentPage="blog">
			<h1>Blog</h1>
			<BlogList />
		</MainPageLayout>
	);
}
