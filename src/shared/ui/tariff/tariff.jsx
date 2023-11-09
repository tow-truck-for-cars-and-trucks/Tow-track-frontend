import './tariff.scss';

function Tariff({ title, description, price, isActive }) {
	return (
		<button
			type="button"
			className={['tariff', isActive ? 'tariff_active' : ''].join(' ')}
		>
			<h2 className="tariff__title">{title}</h2>
			<p className="tariff__description">{description}</p>
			<p className="tariff__price">oт {price} ₽</p>
		</button>
	);
}

Tariff.defaultProps = {
	isActive: false,
};

export default Tariff;
