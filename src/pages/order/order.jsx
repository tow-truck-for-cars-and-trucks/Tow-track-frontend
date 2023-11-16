import Header from '../../widget/header/header';
import Footer from '../../widget/footer/footer';
import Feedbacks from '../../entities/feedbacks/feedbacks';
import OrderConfirmation from '../../entities/order-confirmation/order-confirmation';

function Order() {
	return (
		<>
			<Header />
			<OrderConfirmation />
			<Feedbacks />
			<Footer />
		</>
	);
}

export default Order;
