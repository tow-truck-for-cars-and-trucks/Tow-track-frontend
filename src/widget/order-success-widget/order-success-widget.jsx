import OrderSuccess from '../../entities/ui/order-success/order-success';
import './order-success-widget.scss';

/**
 * @param {number} orderNumber - number of the order
 */
function OrderSuccessWidget({ orderNumber }) {
  return (
    <section className="order-successfully">
      <div className="order-successfully__header">
        <div className="order-successfully__wrapper">
          <h1 className="order-successfully__title-border">
            Заказ №{orderNumber}{' '}
          </h1>
          <h1 className="order-successfully__title">успешно</h1>
        </div>
        <h1 className="order-successfully__title">оформлен!</h1>
      </div>
      <OrderSuccess />
    </section>
  );
}

export default OrderSuccessWidget;
