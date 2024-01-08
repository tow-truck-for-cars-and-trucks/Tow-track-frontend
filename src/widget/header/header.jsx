import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPopupsOpen,
  setPopupsClose,
  isPopupOpen,
} from '../../shared/ui/popup/model/popup-slice';
import './header.scss';
import BurgerIcon from '../../shared/ui/icons/burger-icon';
import PhoneIcon from '../../shared/ui/icons/phone-icon';
import LogoCombined from '../../shared/ui/icons/logo-combined';
import CloseIcon from '../../shared/ui/icons/close-icon';
import Menu from './menu/menu';
import DesktopMenu from './desktop-menu/desktop-menu';
import handlePhoneCall from '../../shared/utils/helpers';
import Profile from './profile/profile';

function Header() {
  const dispatch = useDispatch();

  const isOpenMenu = useSelector((state) => isPopupOpen(state, 'menu'));

  const handleClickMenu = () => {
    if (isOpenMenu) dispatch(setPopupsClose('menu'));
    else dispatch(setPopupsOpen('menu'));
  };

  const navigate = useNavigate();
  const companyPhoneNumber = '88801112222';

  return (
    <>
      <header className="header" id="header" data-testid="header">
        <div className="header__container">
          <button
            className="header__call"
            type="button"
            label="Связаться с компанией"
            onClick={() => handlePhoneCall(companyPhoneNumber, 'в компанию')}
          >
            <PhoneIcon width="24px" height="24px" color="#3b3e49" />
          </button>
          <button
            className="header__button"
            type="button"
            label="Перейти на главную"
            onClick={() => {
              navigate('/?open=main', { replace: true });
              dispatch(setPopupsClose('profile'));
            }}
          >
            <LogoCombined width="88.8px" height="48px" />
          </button>
          <button
            data-testid="burger-menu"
            className="header__button"
            type="button"
            onClick={handleClickMenu}
          >
            {isOpenMenu ? (
              <CloseIcon width="24px" height="24px" />
            ) : (
              <BurgerIcon width="24px" height="24px" />
            )}
          </button>
          <DesktopMenu phoneNumber={companyPhoneNumber} />
        </div>
      </header>
      <Menu />
      <Profile />
    </>
  );
}

export default Header;
