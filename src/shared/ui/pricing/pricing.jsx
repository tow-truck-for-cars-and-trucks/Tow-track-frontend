import './pricing.scss';
import InfoIcon from '../icons/info-icon';

/**
 * @param {string} title - title of the prising
 * @param {string} description - description of the prising
 * @param {string} info - info of the prising
 * @param {boolean} isActive - selected pricing
 * @param {number} price - price offer
 */

function Pricing({ title, description, price, info, isActive, setActive }) {
  return (
    <div className="pricing__container">
      <button
        type="button"
        className={`pricing ${isActive ? 'pricing_active' : ''}`}
        onClick={() => {
          setActive(true);
        }}
      >
        <h2 className="pricing__title">{title}</h2>
        <p className="pricing__description">{description}</p>
        <p className="pricing__price">oт {price} ₽</p>
      </button>
      {isActive && (
        <div className="pricing__info">
          <div className="pricing__info-image">
            <InfoIcon min-width="16px" height="16px" />
          </div>
          <p className="pricing__info-text">{info}</p>
        </div>
      )}
    </div>
  );
}

Pricing.defaultProps = {
  isActive: false,
};

export default Pricing;
