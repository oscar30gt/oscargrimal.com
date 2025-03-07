import "./Widgets.css";

/**
 * Small anchor displayed as a box link
 */
export function LinkWidget({
	label,
	url
}: {
	label: string,
	url: string;
}) {
	return (
		<a className="linkWidget widget" href={url}>
			<p >{label}</p>
			<i className="fi fi-rr-arrow-small-right"></i>
		</a>
	);
}

/**
 * Link to a blog post. Displays title and date.
 */
export function BlogWidget({
	title,
	date,
	url
}: {
	title: string,
	date: string,
	url: string;
}) {
	return (
		<a className="blogWidget widget" href={url}>
			<h3>{title}</h3>
			<p>{date}</p>
		</a>
	);
}

/**
 * Link with a title, caption and a square thumbnail.
 */
export function ThumbnailWidget({
	title,
	caption = "",
	img,
	url
}: {
	title: string,
	caption?: string,
	img: string,
	url: string;
}) {
	return (
		<a className="thumbnailWidget widget" href={url}>
			<img src={img} alt="Thumbnail" />
			<div>
				<h3>{title}</h3>
				<p>{caption}</p>
			</div>
		</a>
	);
}

/**
 * Link with a title, caption and an icon.
 */
export function IconLinkWidget({
	title,
	caption = "",
	icon = "square",
	url
}: {
	title: string,
	caption?: string,
	icon?: string,
	url: string;
}) {
	return (
		<a className="iconLinkWidget widget" href={url}>
			<i className={`fi ${icon}`} />
			<div>
				<h3>{title}</h3>
				<p>{caption}</p>
			</div>
		</a>
	);
}