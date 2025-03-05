import projectData from "../../assets/projects.json";
import { ThumbnailWidget } from "../Content/Widgets";

export default function ProjectList() {
    return Object.entries(projectData)
        .filter(([, project]) => project.featured)
        .map(([id, { title, description }], i) => (
            <ThumbnailWidget
                key={i}
                title={title}
                caption={description}
                img={`/markdown/projects/${id}/icon_128x128.png`}
                url={`/projects/${id}/`}
            />
        )
        );
}
