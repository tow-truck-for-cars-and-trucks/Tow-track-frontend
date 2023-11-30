import { useLocation } from 'react-router-dom';
import OrderSuccess from '../../entities/ui/order-success/order-success';
import './order-success-widget.scss';

function OrderSuccessWidget() {
  const location = useLocation();
  const { id } = location.state;

  return (
    <section className="order-successfully">
      <div className="order-successfully__header">
        <div className="order-successfully__wrapper">
          <h1 className="order-successfully__title-border">Заказ № {id} </h1>
          <h1 className="order-successfully__title">успешно</h1>
        </div>
        <h1 className="order-successfully__title">оформлен!</h1>
      </div>
      <OrderSuccess orderNumber={id} />
    </section>
  );
}

export default OrderSuccessWidget;
