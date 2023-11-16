import './description.scss';

function Description({ title, subtitle }) {
	return (
		<div className="description__text">
			<h2 className="description__title">{title}</h2>
			<h3 className="description__subtitle">{subtitle}</h3>
		</div>
	);
}
export default Description;
