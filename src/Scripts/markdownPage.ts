import { parseMarkdown } from "./markdownParser.ts";

/**
 * Generates the HTML content for a page from a markdown file
 * 
 * @param path the path to the markdown file (relative to the `public/` directory)
 * @returns the HTML for the page. `null` if the markdown file does not exist.
 */
export default async function GeneratePageFromMarkdownFile(path: string) {

    const raw = await getRawMarkdown(path);
    console.log(raw)

    // If the markdown file starts with "<!doctype html>", it is likely the index.html file. This
    // happens when the markdown file does not exist, and the server returns the index.html.
    if (raw.toLowerCase().startsWith("<!doctype html>")) {
        return null;
    }

    const html = await parseMarkdown(raw);
    return html;
}

// Fetches the raw markdown content from the server
async function getRawMarkdown(path: string) {
	const response = await fetch(path);
	const content = await response.text();
	return content;
}