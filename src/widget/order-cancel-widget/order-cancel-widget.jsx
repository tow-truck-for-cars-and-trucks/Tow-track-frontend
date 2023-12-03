import OrderCancel from '../../features/order-cancel/order-cancel';
import './order-cancel-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';

function OrderCancelWidget() {
  return (
    <section className="order-cancelled">
      <div className="order-cancelled__container">
        <OrderNumber number="1234" date="01.11.2023" time="19:09">
          <OrderCancel />
        </OrderNumber>
        <OrderNumber number="1235" date="02.10.2023" time="15:20">
          <OrderCancel />
        </OrderNumber>
        <OrderNumber number="1234" date="03.09.2023" time="18:05">
          <OrderCancel />
        </OrderNumber>
        <OrderNumber number="1239" date="04.08.2022" time="13:29">
          <OrderCancel />
        </OrderNumber>
      </div>
    </section>
  );
}

export default OrderCancelWidget;
