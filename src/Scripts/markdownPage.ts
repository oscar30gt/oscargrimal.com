
import { parseMarkdown } from "./markdownParser.ts";

export default async function GeneratePageFromMarkdownFile(path: string) {

    const raw = await getRawMarkdown(path);

    if (raw.startsWith("<")) {
        return null;
    }

    const html = await parseMarkdown(raw);
    return html;
}

async function getRawMarkdown(path: string) {
	const response = await fetch(path);
	const content = await response.text();
	return content;
}