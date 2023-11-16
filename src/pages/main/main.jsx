import Header from '../../widget/header/header';
import Footer from '../../widget/footer/footer';
import Banner from '../../widget/banner/banner';
import Feedbacks from '../../entities/feedbacks/feedbacks';
import Questions from '../../widget/questions/questions';
import ArrowTop from '../../shared/ui/arrow-scroll/arrow-scroll';

export default function Main() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Feedbacks />
      <Questions />
      <ArrowTop />
      <Footer />
    </div>
  );
}
