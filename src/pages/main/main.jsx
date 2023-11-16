import Header from '../../widget/header/header';
import Footer from '../../widget/footer/footer';
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
