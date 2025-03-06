import { useParams } from "react-router";
import MainPageLayout from "../Components/Presets/MainPageLayout.tsx";

import '../index.css';
import { BackLink } from "../Components/Content/Buttons.tsx";

import blogData from "../assets/blog.json";
import { useEffect, useRef, useState } from "react";
import GeneratePageFromMarkdownFile from "../Scripts/markdownPage.ts";


export default function BlogArticle() {
    const { slug } = useParams() as { slug: string; };

    const [articleFound, setArticleFound] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        getContent();
    });

    const getContent = async () => {
        const content = await GeneratePageFromMarkdownFile(`/markdown/blog/${slug}.md`);
        if (content === null) {
            setArticleFound(false);
            return;
        }

        setArticleFound(true);
        if (contentRef.current)
            contentRef.current.innerHTML = content;
    };

    // RENDER ==========================================================================================================

    if (!articleFound) return (
        <MainPageLayout currentPage="blog">
            <BackLink />
            <h1>Page not found</h1>
            <p>The article you are looking for does not exist.</p>
        </MainPageLayout>

    );

    const getDate = (date: { y: number, m: number, d: number; }) => {
        return new Date(date.y, date.m - 1, date.d).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

    type BlogKey = keyof typeof blogData;
    const blog = blogData[slug as BlogKey];

    return (
        <MainPageLayout currentPage="blog">
            <BackLink />
            <h1>{blog.title}</h1>
            <p>{getDate(blog.date)}</p>
            <hr /> 
            <div ref={contentRef} />
        </MainPageLayout>
    );
}