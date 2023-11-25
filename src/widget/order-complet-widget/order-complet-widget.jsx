import OrderComplete from '../../entities/ui/order-complet/order-complet';
import './order-complet-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';

function OrderCompletWidget() {
  return (
    <section className="order-completed">
      <div className="order-completed__container">
        <OrderNumber number="1234" date="05.11.2023" time="19:09">
          <OrderComplete />
        </OrderNumber>
        <OrderNumber number="1235" date="01.11.2023" time="15:20">
          <OrderComplete />
        </OrderNumber>
        <OrderNumber number="1234" date="05.11.2023" time="19:09">
          <OrderComplete />
        </OrderNumber>
      </div>
    </section>
  );
}

export default OrderCompletWidget;
