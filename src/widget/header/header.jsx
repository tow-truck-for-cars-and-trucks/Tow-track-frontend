import './header.scss';
import BurgerIcon from '../../shared/icons/burger-icon';
import Logo from '../../shared/icons/logo';
import PhoneIcon from '../../shared/icons/phone-icon';

function Header() {
	return (
		<header className="header">
			<div className="header__container">
				<Logo width="40px" height="40px" />
				<div className="header__phone-block">
					<PhoneIcon width="16px" height="16px" />
					<span className="header__phone-number">8 880 111 2222</span>
				</div>
				<BurgerIcon width="35px" height="35px" />
			</div>
		</header>
	);
}

export default Header;
