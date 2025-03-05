import { useParams } from "react-router";
import MainPageLayout from "../Components/Presets/MainPageLayout.tsx";

import '../index.css';
import { BackLink } from "../Components/Content/Buttons.tsx";

import blogData from "../assets/blog.json";
import { useEffect, useRef, useState } from "react";
import { parseMarkdown } from "../Scripts/markdownParser.ts";

export default function BlogArticle() {
    const { slug } = useParams() as { slug: string; };

    const [articleFound, setArticleFound] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const _blogExists = blogExists(slug);
        setArticleFound(_blogExists);

        if (!_blogExists) return;

        const fetchContent = async () => {
            const raw = await getRawMarkdown(slug);

            if (raw.startsWith("<")){
                setArticleFound(false);
                return "This article is not available at the moment.";
            }

            const html = await parseMarkdown(raw);
            return html;
        };

        fetchContent().then(html => {
            if (contentRef.current) {
                contentRef.current.innerHTML = html;
            }
        });

    }, [slug]);

    return (
        <MainPageLayout currentPage="blog">
            <BackLink />
            {
                articleFound ? (
                    <div ref={contentRef}>
                    </div>
                ) : (
                    <>
                        <h1>Page not found</h1>
                        <p>The article you are looking for does not exist.</p>
                    </>
                )
            }
        </MainPageLayout>
    );
}

////////////////////////////////////////////////////////////////////////////////

function blogExists(articleID: string) {
    return blogData.articles.some(article => article.identifier === articleID);
}

async function getRawMarkdown(articleID: string) {
    const response = await fetch(`/markdown/blog/${articleID}.md`);
    const content = await response.text();
    return content;
}