import { useState } from 'react';
import './order-number.scss';
import ArrowDownIcon from '../icons/arrow-down-icon';
import ArrowUpIcon from '../icons/arrow-up-icon';

/**
 * @param {string} number - title of the accordion
 * @param {string} date - title of the accordion
 * @param {string} time - title of the accordion
 */
function OrderNumber({ number, date, time, children }) {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className="order-number">
      <div className="order-number__container">
        <div className="order-number__header">
          <h2 className="order-number__title">
            №{number} от {date} {time}{' '}
          </h2>
          {!isShow && (
            <button
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
