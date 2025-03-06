import blogData from "../../assets/blog.json";
import { BlogWidget } from "../Content/Widgets";

export default function BlogList() {
    const getDate = (date: { y: number, m: number, d: number; }) => {
        return new Date(date.y, date.m - 1, date.d).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
    };


    return Object.entries(blogData)
        .map(([id, { title, date }], i) => (
            <BlogWidget
                key={i}
                title={title}
                date={getDate(date)}
                url={`/blog/${id}`}
            />
        )
        );
}
