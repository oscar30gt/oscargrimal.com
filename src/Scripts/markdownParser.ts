import { marked } from "marked";

// Crea un renderer personalizado
const renderer = new marked.Renderer();

renderer.link = ({ href, title, text }) => {
	return `<a href="${href}" title="${title || ""}" class="inlineLink">${text}</a>`;
};

renderer.image = ({ href, title, text }) => {

	if (href.startsWith("$progressbar")) {
		const percentage = href.split("$progressbar")[1];

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