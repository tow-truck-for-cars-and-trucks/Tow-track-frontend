import Header from '../../widget/header/header';
import Footer from '../../widget/footer/footer';
import OrderSuccessWidget from '../../widget/order-success-widget/order-success-widget';
import Questions from '../../widget/questions/questions';

function SuccessOrderPage() {
  return (
    <>
      <Header />
      <OrderSuccessWidget />
      <Questions />
      <Footer />
    </>
  );
}

export default SuccessOrderPage;
