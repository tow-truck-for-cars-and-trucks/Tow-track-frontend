import { useSelector } from 'react-redux';
import './total-price.scss';
import Button from '../button/button';
import { selectPreloader } from '../../../features/create-order/model/price-preloader-slice';
import PricePreloader from '../price-preloader/price-preloader';

/**
 * @param {number} total - total price of the order
 * @param {boolean} isRegister - is the user logged in or not
 */

function TotalPrice({ total, onClick, isButtonActive }) {
  const isPreloading = useSelector(selectPreloader);

  return (
    <div className="total-price" data-testid="total-price">
      <div className="total-price__wrapper">
        <h2 className="total-price__title">Стоимость заказа:</h2>
        <h2 className="total-price__full-price">
          {' '}
          {isPreloading ? <PricePreloader /> : `${total} ₽`}
        </h2>
      </div>
      <Button
        primary
        label="Оформить заказ"
        onClick={() => onClick()}
        disabled={!isButtonActive}
        id="confirm-order"
      />
    </div>
  );
}

export default TotalPrice;
