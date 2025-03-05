import projectData from "../../assets/projects.json";
import { ThumbnailWidget } from "../Content/Widgets";

export default function ProjectList({ limit = undefined }: { limit?: number; }) {
    return Object.entries(projectData).map(([id, { title, description }], i) => {
        if (limit !== undefined && i >= limit) return "";
        return <ThumbnailWidget
            key={i}
            title={title}
            caption={description}
            img={`/markdown/projects/${id}/icon_128x128.png`}
            url={`/projects/${id}/`}
        />;
    });

}

