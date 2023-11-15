import Header from '../../widget/header/header';
import Footer from '../../widget/footer/footer';
import ButtonToggle from '../../shared/ui/button-toggle/buttonToggle';
import ButtonCounter from '../../shared/ui/button-counter/buttonCounter';
import './main.scss';

export default function Main() {
	return (
		<>
			<Header />
			<ButtonToggle />
			<ButtonCounter />
			<Footer />
		</>
	);
}
