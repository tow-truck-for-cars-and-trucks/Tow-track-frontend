import './order-details.scss';
import { useState } from 'react';

/**
 * @param {string} pricing - pricing chosen by the user
 * @param {string} description - description of the prising
 * @param {string} carType - the type of car specified by the user
 * @param {number} wheelLock - how many wheels are blocked
 * @param {boolean} cuvetteWork - cuvette work is needed or not needed
 * @param {string} comment - comment of the user
 * @param {boolean} deferredOrder - deferred order needed/not needed
 */
function OrderDetails({ tariff, carType, wheelLock, towin, delay, comment }) {
  const [isShow, setIsShow] = useState(false);

  function wheelsCount(count) {
    if (count === 0) {
      return 'колёс';
    }
    if (count === 1) {
      return 'колесо';
    }
    return 'колеса';
  }

  return (
    <div className="order-details" data-testid="order-details">
      <ul className="order-details__content">
        <li className="order-details__title">Выбранный тариф</li>
        <li className="order-details__selected">{tariff}</li>
      </ul>
      <ul className="order-details__content">
        <li className="order-details__title">Что везем</li>
        <li className="order-details__selected">{carType}</li>
      </ul>
      <ul className="order-details__content">
        <li className="order-details__title">Блокировка колес</li>
        <li className="order-details__selected">
          {`${wheelLock} ${wheelsCount(wheelLock)}
          `}
        </li>
      </ul>
      <ul className="order-details__content">
        <li className="order-details__title">Кюветные работы</li>
        <li className="order-details__selected" data-testid="towin-caption">
          {towin}
        </li>
      </ul>
      <ul className="order-details__content">
        <li className="order-details__title">Отложенный заказ</li>
        <li className="order-details__selected" data-testid="delay-caption">
          {delay}
        </li>
      </ul>
      <ul className="order-details__content">
        <li className="order-details__title">Комментарий</li>
        {comment ? (
          <button
            type="button"
            data-testid="comment-button"
            aria-label={isShow ? 'Свернуть' : 'Читaть'}
            className="order-details__button"
            onClick={() => setIsShow(!isShow)}
          >
            {isShow ? 'Свернуть' : 'Читaть'}
          </button>
        ) : (
          'Нет'
        )}
      </ul>
      {isShow && (
        <p className={isShow ? 'order-details_opened' : ''}>{comment}</p>
      )}
    </div>
  );
}

OrderDetails.defaultProps = {};

export default OrderDetails;
