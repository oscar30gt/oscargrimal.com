import projectData from "../../assets/projects.json";
import { ThumbnailWidget } from "../Content/Widgets";

export default function ProjectList({ limit = undefined }: { limit?: number; }) {
    return (
        <>
            {projectData.projects.slice(0, limit).map(proj => (
                <ThumbnailWidget
                    key={proj.title}
                    title={proj.title}
                    caption={proj.description}
                    img={`/markdown/projects/${proj.identifier}/icon_128x128.png`}
                    url={`/projects/${proj.identifier}/`}
                />
            ))}
        </>
    );
}