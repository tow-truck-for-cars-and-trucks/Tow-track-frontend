import Header from '../../widget/header/header';
import Footer from '../../widget/footer/footer';
import './main.scss';
import Feedbacks from '../../entities/feedbacks/feedbacks';
import Application from '../../widget/application/application';

export default function Main() {
	return (
		<>
			<Header />
			<Feedbacks />
			<Application />
			<Footer />
		</>
	);
}
