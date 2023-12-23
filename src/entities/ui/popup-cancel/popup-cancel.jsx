import './popup-cancel.scss';
import React, { useState } from 'react';
import Button from '../../../shared/ui/button/button';
import PopupCancellations from '../popup-cancellations/popup-cancellations';

function PopupCancel({ isOpen, onClose, cancelOrder }) {
  const [isPopupCancellation, setIsPopupCancellation] = useState(false);
  const handleClose = () => {
    setIsPopupCancellation(false);
    onClose();
  };
  return (
    <div>
      <div
        data-testid="popup-cancel-order"
        className={isOpen ? 'popup-cancel active' : 'popup-cancel'}
      >
        <div className="popup-cancel__content">
          <h1 className="popup-cancel__title">
            {' '}
            Вы уверены, что хотите отменить заказ?
          </h1>
          <div className="popup-cancel__btn">
            <Button label="Вернуться" primary onClick={onClose} />
            <Button
              label="Да, отменить"
              onClick={() => {
                setIsPopupCancellation(true);
              }}
            />
          </div>
          <PopupCancellations
            cancelOrder={cancelOrder}
            isOpen={isPopupCancellation}
            onClose={handleClose}
          />
        </div>
      </div>
    </div>
  );
}
export default PopupCancel;
