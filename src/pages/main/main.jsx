import Header from '../../widget/header/header';
import Footer from '../../widget/footer/footer';
import './main.scss';
import Feedbacks from '../../entities/feedbacks/feedbacks';
import ArrowTop from '../../shared/ui/arrow-scroll/arrow-scroll';

export default function Main() {
  return (
    <div className="container">
      <Header />
      <Feedbacks />
      <ArrowTop />
      <Footer />
    </div>
  );
}
