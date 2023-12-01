import OrderComplete from '../../entities/ui/order-complet/order-complet';
import './order-cancel-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';

function OrderCancelWidget() {
  return (
    <section className="order-cancelled">
      <div className="order-cancelled__container">
        <OrderNumber number="1234" date="01.11.2023" time="19:09">
          <OrderComplete />
        </OrderNumber>
        <OrderNumber number="1235" date="02.10.2023" time="15:20">
          <OrderComplete />
        </OrderNumber>
        <OrderNumber number="1234" date="03.09.2023" time="18:05">
          <OrderComplete />
        </OrderNumber>
        <OrderNumber number="1239" date="04.08.2022" time="13:29">
          <OrderComplete />
        </OrderNumber>
      </div>
    </section>
  );
}

export default OrderCancelWidget;
