import './header.scss';
import BurgerIcon from '../../shared/ui/icons/burger-icon';
import Logo from '../../shared/ui/icons/logo';

function Header() {
	return (
		<header>
			<div className="container">
				<Logo />
				<span className="phone-span">8 880 111 2222</span>
				<BurgerIcon />
			</div>
		</header>
	);
}

export default Header;
