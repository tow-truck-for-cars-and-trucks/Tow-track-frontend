import './header.scss';
import React from 'react';
import BurgerIcon from '../../shared/ui/icons/burger-icon';
import PhoneIcon from '../../shared/ui/icons/phone-icon';
import LogoCombined from '../../shared/ui/icons/logo-combined';
import CloseIcon from '../../shared/ui/icons/close-icon';
import Menu from './menu/menu';

function Header({ onCreateOrderClick }) {
  const [showMenu, setIsShowMenu] = React.useState(false);
  const handleClick = () => {
    setIsShowMenu(!showMenu);
  };

  const driverPhoneNumber = '88801112222';

  const handleOurDriver = () => {
    console.log('Выполняется вызов в компанию:', driverPhoneNumber);
    window.location.href = `tel:${driverPhoneNumber}`;
  };

  return (
    <>
      <header className="header" id="header">
        <div className="header__container">
          <button
            className="header__call"
            type="button"
            label="Связаться с компанией"
            onClick={handleOurDriver}
          >
            <PhoneIcon width="24px" height="24px" />
          </button>
          <div className="header__phone-block">
            <LogoCombined width="88.8px" height="48px" />
          </div>
          <button
            className="header__button"
            type="button"
            onClick={handleClick}
          >
            {showMenu ? (
              <CloseIcon width="24px" height="24px" />
            ) : (
              <BurgerIcon width="24px" height="24px" />
            )}
          </button>
        </div>
      </header>
      <Menu visible={showMenu} onCreateOrderClick={onCreateOrderClick} />
    </>
  );
}

export default Header;
