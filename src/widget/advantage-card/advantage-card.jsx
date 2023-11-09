import './advantage-card.scss';

function AdvantageCard({ icon, title, subtitle }) {
	return (
		<article>
			<div className="advantage-card">
				{icon}
				<h2 className="advantage-card__title">{title}</h2>
				<p className="advantage-card__subtitle">{subtitle}</p>
			</div>
		</article>
	);
}

AdvantageCard.defaultProps = {
	icon: 'some-icon',
};

export default AdvantageCard;
