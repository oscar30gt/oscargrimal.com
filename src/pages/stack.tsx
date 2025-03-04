import MainPageLayout from "../Components/Presets/MainPageLayout.tsx";

import { IconLinkWidget } from "../Components/Content/Widgets.tsx";
import '../index.css';

export default function Stack() {
	return (
		<MainPageLayout currentPage="stack">
			<h1>Stack</h1>
			<IconLinkWidget
				title="Setup"
				url="/stack/setup"
				icon="fi-tr-laptop"
				caption="The tools I use to build, learn, and create every day."
			/>

			<IconLinkWidget
				title="VS Code Settings"
				url="/stack/vscode"
				icon="fi-tr-gears"
				caption="My VS Code extensions, and customizations."
			/>

			<IconLinkWidget
				title="Software"
				url="/stack/software"
				icon="fi-tr-window-restore"
				caption="Apps and tools I rely on for work and productivity."
			/>

			<IconLinkWidget
				title="Design & UI"
				url="/stack/design"
				icon="fi-tr-paintbrush-pencil"
				caption="Themes, fonts, and styles I love."
			/>

			<IconLinkWidget
				title="Music Picks"
				url="/stack/music"
				icon="fi-tr-waveform"
				caption="Some of my favorite albums, playlists, and artists."
			/>


		</MainPageLayout>
	);
}