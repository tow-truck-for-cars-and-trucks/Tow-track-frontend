import './advantage-card.scss';
import CashIcon from '../../shared/ui/icons/cash-icon';

function AdvantageCard() {
	return (
		<article>
			<div className="advantage-card">
				<CashIcon width="64px" height="64px" />
				<h2 className="advantage-card__title">Цена известна заранее</h2>
				<p className="advantage-card__subtitle">
					Оплата наличными или картой через СПБ
				</p>
			</div>
		</article>
	);
}

export default AdvantageCard;
