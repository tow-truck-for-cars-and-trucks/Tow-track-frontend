import './advantage-card.scss';

/**
 * @param {string} title - title of the card
 * @param {string} subtitle - description of the card
 * @param {JSX.Element} icon - icon of the card
 */

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
