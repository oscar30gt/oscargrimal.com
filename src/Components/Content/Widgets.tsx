import "./Widgets.css";

export function LinkWidget({ label, url }: { label: string, url: string; }) {
	return (
		<a className="linkWidget widget" href={url}>
			<p >{label}</p>
			<i className="fi fi-rr-arrow-small-right"></i>
		</a>
	);
}

export function BlogWidget({ title, date, url }: { title: string, date: string, url: string; }) {
	return (
		<a className="blogWidget widget" href={url}>
			<h3>{title}</h3>
			<p>{date}</p>
		</a>
	);
}

export function ThumbnailWidget({ title, caption, img, url }: { title: string, caption: string, img: string, url: string; }) {
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