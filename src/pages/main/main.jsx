import Header from '../../widget/header/header';
import Footer from '../../widget/footer/footer';
import ButtonToggle from '../../shared/ui/button-toggle/buttonToggle';
import ButtonCounter from '../../shared/ui/button-counter/buttonCounter';
import './main.scss';
import Feedbacks from '../../entities/feedbacks/feedbacks';

export default function Main() {
	return (
		<>
			<Header />
			<Feedbacks />
			<Footer />
		</>
	);
}
