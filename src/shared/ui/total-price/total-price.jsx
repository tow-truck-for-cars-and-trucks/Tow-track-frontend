import './total-price.scss';
import Button from '../button/button';

/**
 * @param {number} total - total price of the order
 * @param {boolean} isRegister - is the user logged in or not
 */

function TotalPrice({ total, onClick, isButtonActive }) {
  return (
    <div className="total-price">
      <div className="total-price__wrapper">
        <h2 className="total-price__title">Стоимость заказа:</h2>
        <h2 className="total-price__full-price"> {total} ₽</h2>
      </div>
      <Button
        primary="true"
        label="Оформить заказ"
        onClick={() => onClick()}
        disabled={!isButtonActive}
      />
    </div>
  );
}

export default TotalPrice;
