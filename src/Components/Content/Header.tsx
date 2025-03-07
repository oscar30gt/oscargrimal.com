import React, { useEffect, useRef } from "react";
import { BackLink } from "./Buttons";
import "./Header.css";

/**
 * Header for a page. Can have an image, a title and a list of links.
 * 
 * @param props React component props
 */
export default function PageHeader({
    title,
    image,
    linkList,
    themeColor
}: {
    title: string,
    image?: string,
    linkList?: { icon: string, href: string; }[],
    themeColor?: string;
}) {

    const headerRef = useRef<HTMLHeadingElement>(null) as React.MutableRefObject<HTMLHeadingElement>;

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        if (image)
            setThemeColor(true);
    });

    // Handles the image parallax effect and theme color change on scroll.
    // Only runs if the header has an image.
    const onScroll = () => {
        if (!image) return;

        const headerHeight = headerRef.current.clientHeight;
        const scrollY = window.scrollY;

        const percentageHidden = Math.min(scrollY / headerHeight, 1);
        headerRef.current.style.setProperty("--image-hide-factor", `${percentageHidden}`);
        headerRef.current.style.setProperty("--image-zoom-factor", `${Math.max(0, -percentageHidden)}`);

        if (percentageHidden < 0.05) {
            setThemeColor(true);
        }
        else {
            setThemeColor(false);
        };
    };

    // Sets the theme color of the website.
    function setThemeColor(customTheme: boolean) {
        if (!themeColor) return;

        if (customTheme) {
            document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]')!
                .setAttribute("content", themeColor);

            document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]')!
                .setAttribute("content", themeColor); // Nuevo color
        }
        else {
            document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]')!
                .setAttribute("content", "hsl(150, 10%, 6%)");

            document.querySelector('meta[name="theme-color"][media="(prefers-color-scheme: light)"]')!
                .setAttribute("content", "hsl(150, 15%, 96%)"); // Nuevo color
        }
    }

    return (
        <>
            <header ref={headerRef} className="pageHeader" style={{ "--theme-color": themeColor } as React.CSSProperties}>
                {image && <div className="imageContainer" style={{ background: themeColor }}>
                    <img src={image} alt="headerImage" />
                </div>}
                <div className="linkList">
                    <BackLink />
                    {linkList?.map((link, i) => (
                        <a key={i} href={link.href} target="_blank" rel="noreferrer">
                            <i className={`fi ${link.icon}`}></i>
                        </a>
                    ))}
                </div>
            </header>
            <h1>{title}</h1>
        </>
    );
};