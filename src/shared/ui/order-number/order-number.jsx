import { useState } from 'react';
import { format } from 'date-fns';
import './order-number.scss';
import ArrowDownIcon from '../icons/arrow-down-icon';
import ArrowUpIcon from '../icons/arrow-up-icon';

/**
 * @param {string} number - title of the accordion
 * @param {string} date - title of the accordion
 * @param {string} time - title of the accordion
 */
function OrderNumber({ number, date, children }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="order-number" data-testid="order-number">
      <div
        className={`order-number__container ${
          isShow ? 'order-number__container_opened' : ''
        }`}
      >
        <div className="order-number__header">
          <h2 className="order-number__title">
            №{number} от {format(new Date(date), 'dd.MM.yyyy HH:mm')}
          </h2>
          {!isShow && (
            <button
              data-testid="arrow-button"
              type="button"
              aria-label="Развернуть"
              className="order-number__icon"
              onClick={() => setIsShow(true)}
            >
              <ArrowDownIcon width="16px" height="16px" fill="#fff" />
            </button>
          )}

          {isShow && (
            <button
              type="button"
              aria-label="Свернуть"
              className="order-number__icon"
              onClick={() => setIsShow(false)}
            >
              <ArrowUpIcon width="16px" height="16px" fill="#fff" />
            </button>
          )}
        </div>
      </div>
      {isShow && (
        <div className={isShow ? 'order-number_opened' : ''}>{children}</div>
      )}
    </div>
  );
}

OrderNumber.defaultProps = {
  isShow: false,
};

export default OrderNumber;
