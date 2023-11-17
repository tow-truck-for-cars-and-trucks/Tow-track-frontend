import Header from '../../widget/header/header';
import Footer from '../../widget/footer/footer';
import Feedbacks from '../../entities/ui/feedbacks/feedbacks';
import OrderConfirmation from '../../entities/ui/order-confirmation/order-confirmation';
import Questions from '../../widget/questions/questions';

function Order() {
  return (
    <>
      <Header />
      <OrderConfirmation />
      <Feedbacks />
      <Questions />
      <Footer />
    </>
  );
}

export default Order;
