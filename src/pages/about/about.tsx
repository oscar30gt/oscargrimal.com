import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import MainPageLayout from "../../Components/Presets/MainPageLayout.tsx";

import '../../index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<MainPageLayout currentPage="about">
			<h1>About Me</h1>
		</MainPageLayout>
	</StrictMode>,
);
