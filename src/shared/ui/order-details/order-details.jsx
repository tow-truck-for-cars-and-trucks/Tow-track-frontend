import './order-details.scss';

/**
 * @param {string} pricing - pricing chosen by the user
 * @param {string} description - description of the prising
 * @param {string} carType - the type of car specified by the user
 * @param {number} wheelLock - how many wheels are blocked
 * @param {boolean} cuvetteWork - cuvette work is needed or not needed
 * @param {string} deferredOrder - deferred order needed/not needed
 */

function OrderDetails({
  pricing,
  carType,
  wheelLock,
  cuvetteWork,
  deferredOrder,
}) {
  return (
    <div className="order-details">
      <ul className="order-details__content">
        <li className="order-details__title">Выбранный тариф</li>
        <li className="order-details__selected">{pricing}</li>
      </ul>
      <ul className="order-details__content">
        <li className="order-details__title">Что везем</li>
        <li className="order-details__selected">{carType}</li>
      </ul>
      <ul className="order-details__content">
        <li className="order-details__title">Блокировка колес</li>
        <li className="order-details__selected">{wheelLock} колес</li>
      </ul>
      <ul className="order-details__content">
        <li className="order-details__title">Кюветные работы</li>
        <li className="order-details__selected">{cuvetteWork}</li>
      </ul>
      <ul className="order-details__content">
        <li className="order-details__title">Отложенный заказ</li>
        <li className="order-details__selected">{deferredOrder}</li>
      </ul>
      <ul className="order-details__content">
        <li className="order-details__title">Комментарий</li>
        <button
          type="button"
          aria-label="Читать"
          className="order-details__button"
        >
          Читать
        </button>
      </ul>
      <p className="order-details__caption">
        Здесь&nbsp;можно&nbsp;прочесть&nbsp;оставленный комментарий
      </p>
    </div>
  );
}

OrderDetails.defaultProps = {};

export default OrderDetails;
