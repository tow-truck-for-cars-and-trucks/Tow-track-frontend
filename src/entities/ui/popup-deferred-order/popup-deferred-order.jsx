import './popup-deferred-order.scss';
import CloseIcon from '../../../shared/ui/icons/close-icon';
import Button from '../../../shared/ui/button/button';

function PopupDeferredOrder({ isOpen, onClose, onSubmit }) {
  return (
    <div className={`popup-deferred ${isOpen ? 'popup-deferred_active' : ''}`}>
      <div className="popup-deferred__content">
        <button
          className="popup-deferred__close"
          type="button"
          aria-label="кнопка закрытия модального окна"
          onClick={onClose}
        >
          <CloseIcon width="16px" height="16px" />
        </button>
        <h2 className="popup-deferred__title">Отложенный заказ</h2>
        <p className="popup-deferred__text">
          Отложенный заказ можно сделать не ранее чем за 2 часа и не позднее 3
          дней, начиная с текущей даты
        </p>
        <form
          className="popup-deferred__form"
          name="deferred-order"
          onSubmit={onSubmit}
        >
          <div className="popup-deferred__box">
            <h3 className="popup-deferred__subtitle">Дата</h3>
            <input className="popup-deferred__input" />
          </div>
          <div className="popup-deferred__times">
            <h3 className="popup-deferred__subtitle">Время</h3>
            <div className="popup-deferred__box-time">
              <input className="popup-deferred__time" />
              <p className="popup-deferred__colon">:</p>
              <input className="popup-deferred__time" />
            </div>
          </div>
          <Button label="Сохранить" primary />
        </form>
      </div>
    </div>
  );
}
export default PopupDeferredOrder;
