import OrderActive from '../../entities/ui/order-complet/order-complet';
import './order-complet-widget.scss';
import PagesTitle from '../../shared/ui/pages-title/pages-title';
import Chip from '../../shared/ui/chip/chip';
import OrderNumber from '../../shared/ui/order-number/order-number';

function OrderCompletWidget() {
  return (
    <section className="order-completed">
      <div className="order-completed__header">
        <PagesTitle title="Мои заказы" />
      </div>
      <div className="order-completed__elect-container">
        <Chip label="Активные" />
        <Chip label="Завершенные" />
        <Chip label="Отмененные" disabled="true" />
      </div>
      <div className="order-completed__container">
        <OrderNumber number="1234" date="05.11.2023" time="19:09">
          <OrderActive />
        </OrderNumber>
        <OrderNumber number="1235" date="01.11.2023" time="15:20">
          <OrderActive />
        </OrderNumber>
        <OrderNumber number="1234" date="05.11.2023" time="19:09">
          <OrderActive />
        </OrderNumber>
      </div>
    </section>
  );
}

export default OrderCompletWidget;
