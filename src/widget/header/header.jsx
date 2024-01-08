import { useNavigate } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';
import BurgerIcon from '../../shared/ui/icons/burger-icon';
import PhoneIcon from '../../shared/ui/icons/phone-icon';
import LogoCombined from '../../shared/ui/icons/logo-combined';
import CloseIcon from '../../shared/ui/icons/close-icon';
import Menu from './menu/menu';
import DesktopMenu from './desktop-menu/desktop-menu';
import handlePhoneCall from '../../shared/utils/helpers';
import Profile from './profile/profile';

function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);

  const handleClickMenu = () => {
    setIsShowMenu(!isShowMenu);
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
              setIsShowProfile(false);
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
            {isShowMenu ? (
              <CloseIcon width="24px" height="24px" />
            ) : (
              <BurgerIcon width="24px" height="24px" />
            )}
          </button>
          <DesktopMenu
            isShowProfile={isShowProfile}
            phoneNumber={companyPhoneNumber}
            handleClickProfile={() => setIsShowProfile(!isShowProfile)}
          />
        </div>
      </header>
      <Menu
        visible={isShowMenu}
        isShowProfile={isShowProfile}
        handleClickProfile={() => {
          setIsShowMenu(!isShowMenu);
          setIsShowProfile(!isShowProfile);
        }}
      />
      <Profile visible={isShowProfile} />
    </>
  );
}

export default Header;
