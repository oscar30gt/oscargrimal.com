/**
 * markdownParser.ts
 * 
 * This script contains the logic to parse markdown content into HTML.
 * It uses the `marked` library to convert markdown into HTML.
 * 
 * In addition to the default markdown elements, this script also supports the following custom elements:
 * 
 * PROGRESS BAR:
 * 		Syntax: 	![{label}]($progressbar{percentage})
 * 		Example: 	![My progress bar]($progressbar75)
 * 
 * BOX LINK:
 * 		Syntax: 	[{text}]($boxlink{url})
 * 		Example: 	[Click me]($boxlinkhttps://example.com)
 */


import { marked } from "marked";

// Creates a custom renderer for extra elements.
const renderer = new marked.Renderer();

renderer.link = ({ href, title, text }) => {

	// Box links
	if (href.startsWith("$boxlink_")) {

		return `<a class="linkWidget widget" href=${href.split("$boxlink_")[1]} title="${title || ""}">
					<p>${text}</p>
					<i class="fi fi-rr-arrow-small-right"></i>
				</a>`;
	}

	return `<a href="${href}" title="${title || ""}" class="inlineLink">${text}</a>`;
};

renderer.image = ({ href, title, text }) => {

	// Progress bars
	if (href.startsWith("$progressbar_")) {
		const percentage = href.split("$progressbar_")[1];

		return `<div class="progressBar">
            		<p>${text}<span></span>${percentage}%</p>
            		<div class="progressBarContainer">
                		<div class="progressBarFill" style='width: ${percentage}%'></div>
            		</div>
        		</div>`;
	}

	return `<img src="${href}" alt="${text}" title="${title || ""}" class="plainImage"/>`;
};

marked.setOptions({
	renderer: renderer,
	gfm: true,
	breaks: true,
});

export async function parseMarkdown(md: string) {
	return marked.parse(md);
}