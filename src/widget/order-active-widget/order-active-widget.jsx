import OrderActive from '../../entities/ui/order-active/order-active';
import './order-active-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';

function OrderActiveWidget() {
  return (
    <section className="order-activated">
      <div className="order-activated__container">
        <OrderNumber number="1234" date="05.11.2023" time="19:09">
          <OrderActive />
        </OrderNumber>
        <OrderNumber number="1235" date="01.11.2023" time="15:20">
          <OrderActive />
        </OrderNumber>
      </div>
    </section>
  );
}

export default OrderActiveWidget;
