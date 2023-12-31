import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPopupsOpen,
  setPopupsClose,
  isPopupOpen,
} from '../../../shared/ui/popup/model/popup-slice';
import './desktop-menu.scss';
import PhoneIcon from '../../../shared/ui/icons/phone-icon';
import UserIcon from '../../../shared/ui/icons/user-icon';
import handlePhoneCall from '../../../shared/utils/helpers';

/**
 * @param {string} phoneNumber - defines company number
 */
function DesktopMenu({ phoneNumber }) {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isOpenProfile = useSelector((state) => isPopupOpen(state, 'profile'));

  const { pathname } = useLocation();
  const [params] = useSearchParams();

  const handleClickProfile = () => {
    if (isOpenProfile) dispatch(setPopupsClose('profile'));
    else dispatch(setPopupsOpen('profile'));
  };

  return (
    <div className="desktop-menu" data-testid="desktop-menu">
      <nav className="desktop-menu__nav">
        <button
          type="button"
          onClick={() => navigate('/?open=main', { replace: true })}
          className={`desktop-menu__item ${
            pathname === '/' && params.get('open') === 'main'
              ? 'desktop-menu__item_active'
              : ''
          }`}
        >
          Главная
        </button>
        <button
          type="button"
          onClick={() => navigate('/contacts', { replace: true })}
          className={`desktop-menu__item ${
            pathname === '/contacts' ? 'desktop-menu__item_active' : ''
          }`}
        >
          Контакты
        </button>
        <button
          type="button"
          onClick={handleClickProfile}
          className={`desktop-menu__item${
            isOpenProfile ? ' desktop-menu__item_active' : ''
          }`}
        >
          <UserIcon width="16px" height="16px" color="#3B3E49" />
          &nbsp; Профиль
        </button>
        <button
          className="desktop-menu__item"
          type="button"
          label="Связаться с компанией"
          onClick={() => handlePhoneCall(phoneNumber, 'в компанию')}
        >
          <PhoneIcon width="16px" height="16px" color="#3B3E49" />
          &ensp;
          {[
            [
              phoneNumber.substring(0, 1),
              phoneNumber.substring(1, 4),
              phoneNumber.substring(4, 7),
            ].join(' '),
            phoneNumber.substring(7, 9),
            phoneNumber.substring(9),
          ].join(' ')}
        </button>
      </nav>
    </div>
  );
}

export default DesktopMenu;
