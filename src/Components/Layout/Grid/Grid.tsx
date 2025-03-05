import { useState } from "react";
import "./Grid.css";

export default function Grid({
    title,
    content,
}: {
    title: string,
    content: { title: string, description: string, image: string, href: string; }[];
}) {
    const [gridView, _setGridView] = useState(true);

    const setGridView = (view: boolean) => {
        setTimeout(() => {
            _setGridView(view);
        }, 0);    
    }

    return (
        <div className="grid">
            <div className="gridHeader">
                <p>{title}</p>
                <div className="gridSettings">
                    <button className={`gridSettingsButton ${gridView ? "" : "current"}`} onClick={() => setGridView(false)}><i className="fi fi-rr-list" /></button>
                    <button className={`gridSettingsButton ${gridView ? "current" : ""}`} onClick={() => setGridView(true)}><i className="fi fi-rr-apps" /></button>
                </div>
            </div>
            <div className={`gridContent ${gridView ? "gridView" : "listView"}`}>
                {content.map((item, index) => (
                    <GridItem
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        href={item.href}
                    />
                ))}

            </div>
        </div>
    );
}

function GridItem({
    title,
    description,
    image,
    href
}: {
    title: string,
    description: string,
    image: string,
    href: string;
}) {
    return (
        <a href={href} className="widget">
            <div className="gridItem">
                <img src={image} alt="thumbnail" />
                <div className="text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </a>
    );
};