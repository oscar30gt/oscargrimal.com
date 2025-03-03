import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import MainPageLayout from "../../Components/Presets/MainPageLayout.tsx";

import '../../index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MainPageLayout currentPage="projects">
			<h1>Projects</h1>
		</MainPageLayout>
	</StrictMode>,
);
