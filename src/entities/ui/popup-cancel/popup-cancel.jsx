import './popup-cancel.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  isPopupOpen,
  setPopupsClose,
  setPopupsOpen,
} from '../../../shared/ui/popup/model/popup-slice';
import Button from '../../../shared/ui/button/button';
import PopupCancellations from '../popup-cancellations/popup-cancellations';

function PopupCancel({ cancelOrder }) {
  const isOpen = useSelector((state) => isPopupOpen(state, 'popup-cancel'));
  const dispatch = useDispatch();

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
            <Button
              label="Вернуться"
              primary
              onClick={() => {
                dispatch(setPopupsClose('popup-cancel'));
              }}
            />
            <Button
              label="Да, отменить"
              onClick={() => {
                dispatch(setPopupsOpen('popup-cancellations'));
              }}
            />
          </div>
          <PopupCancellations cancelOrder={cancelOrder} />
        </div>
      </div>
    </div>
  );
}
export default PopupCancel;
