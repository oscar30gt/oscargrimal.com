import blogData from "../../assets/blog.json";
import { BlogWidget } from "../Content/Widgets";

export default function BlogList({limit = undefined}: {limit?: number}) {
    const getDate = (date: { y: number, m: number, d: number }) => {
        return new Date(date.y, date.m - 1, date.d).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
    }

    return (
        <>
            {blogData.articles.slice(0, limit).map(article => (
                <BlogWidget
                    title={article.title}
                    date={getDate(article.date)}
                    url={`/blog/${article.identifier}`}
                />
            ))}
        </>
    );
}