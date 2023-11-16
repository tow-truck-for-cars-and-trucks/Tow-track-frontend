import Header from '../../widget/header/header';
import Footer from '../../widget/footer/footer';
import Banner from '../../widget/banner/banner';
import Feedbacks from '../../entities/feedbacks/feedbacks';
import Questions from '../../widget/questions/questions';

export default function Main() {
	return (
		<>
			<Header />
			<Banner />
			<Feedbacks />
			<Questions />
			<Footer />
		</>
	);
}
