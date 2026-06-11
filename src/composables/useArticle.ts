import matter from "gray-matter";
import type { Article } from "@/types/Article";

export function useArticles(): Article[] {
    const modules = import.meta.glob(
        "/src/content/articles/*.md",
        {
            eager: true,
            query: "?raw",
            import: "default",
        }
    );

    return Object.values(modules).map((raw) => {
        const { data, content } = matter(raw as string);

        return {
            title: data.title,
            date: data.date,
            images: data.images,
            video: data.video,
            text: content.trim(),
        };
    });
}