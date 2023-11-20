import './popup.scss';
import CloseIcon from '../icons/close-icon';

function Popup({ children, active, setActive }) {
  return (
    <div>
      <div className={active ? 'popup active' : 'popup'}>
        <div>
          <div className="popup__content">
            <button
              className="popup__close"
              type="button"
              aria-label="кнопка закрытия модального окна"
              onClick={() => setActive(false)}
            >
              <CloseIcon width="16px" height="16px" />
            </button>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Popup;
