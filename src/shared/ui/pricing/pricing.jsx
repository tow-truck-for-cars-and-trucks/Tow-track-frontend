import './pricing.scss';

/**
 * @param {string} title - title of the prising
 * @param {string} description - description of the prising
 * @param {boolean} isActive - selected pricing
 * @param {number} price - price offer
 */

function Pricing({ title, description, price, setActive, isActive }) {
  return (
    <button
      type="button"
      className={`pricing ${isActive ? 'pricing_active' : ''}`}
      onClick={() => setActive(true)}
    >
      <h2 className="pricing__title">{title}</h2>
      <p className="pricing__description">{description}</p>
      <p className="pricing__price">oт {price} ₽</p>
    </button>
  );
}

Pricing.defaultProps = {
  isActive: false,
};

export default Pricing;
