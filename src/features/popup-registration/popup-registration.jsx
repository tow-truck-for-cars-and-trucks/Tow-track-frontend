import './popup-registration.scss';
import { useNavigate } from 'react-router-dom';
import successIcon from '../../shared/ui/icons/successIcon.png';
import failIcon from '../../shared/ui/icons/failIcon.png';
import Popup from '../../shared/ui/popup/popup';
import Button from '../../shared/ui/button/button';

function PopupRegistration({ isOpen, onClose, isSuccess }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/', { replace: true });
  };
  return (
    <Popup active={isOpen} setActive={onClose}>
      <div className="popup-registration">
        {isSuccess ? (
          <>
            <img
              src={`${successIcon}`}
              alt="Регистрация прошла успешно."
              className="popup-registration__tooltip-icon"
            />
            <p className="popup-registration__tooltip-message">
              Вы успешно зарегистрированы!
            </p>
          </>
        ) : (
          <>
            <img
              src={`${failIcon}`}
              alt="Регистрация не была выполнена."
              className="popup-registration__tooltip-icon"
            />
            <p className="popup-registration__tooltip-message">
              При регистрации произошла ошибка
            </p>
            <p className="popup-registration__tooltip-message-caption">
              Попробуйте позже
            </p>
            <Button label="На главную" onClick={handleNavigate} primary />
          </>
        )}
      </div>
    </Popup>
  );
}
export default PopupRegistration;
