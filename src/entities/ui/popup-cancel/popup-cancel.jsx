import './popup-cancel.scss';
import Button from '../../../shared/ui/button/button';

function PopupCancel({ isOpen, onClose }) {
  return (
    <div>
      <div className={isOpen ? 'popup-cancel active' : 'popup-cancel'}>
        <div className="popup-cancel__content">
          <h1 className="popup-cancel__title">
            {' '}
            Вы уверены, что хотите отменить заказ?
          </h1>
          <div className="popup-cancel__btn">
            <Button label="Вернуться" primary="true" onClick={onClose} />
            <Button label="Да, отменить" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default PopupCancel;
