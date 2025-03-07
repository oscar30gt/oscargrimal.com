/**
 * Markdown custom element for a progress bar.
 */
export default function ProgressBar({ title, progress }: { title: string, progress: number; }) {
    return (
        <div className="progressBar">
            <p>{title}<span />{progress}%</p>
            <div className="progressBarContainer">
                <div className="progressBarFill" style={{ width: `${progress}%` }}></div>
            </div>
        </div>
    );
}