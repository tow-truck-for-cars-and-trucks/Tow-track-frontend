import './header.scss';
import BurgerIcon from '../../shared/ui/icons/burger-icon';
import Logo from '../../shared/ui/icons/logo';

function Header() {
	return (
		<header>
			<div className="container">
				<Logo width="40px" height="40px" />
				<span className="phone-span">8 880 111 2222</span>
				<BurgerIcon width="40px" height="40px" />
			</div>
		</header>
	);
}

export default Header;
