import { useState, useEffect } from 'react';
import OrderCancel from '../../features/order-cancel/order-cancel';
import orderApi from '../../shared/api/order-api';
import './order-cancel-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';

function OrderCancelWidget() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderApi
      .getAllOrders('Отмененный')
      .then((order) => setOrders(order))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="order-cancelled">
      <div className="order-cancelled__container">
        {orders.map((cancelledOrder) => (
          <OrderNumber
            number={cancelledOrder.id}
            date="01.11.2023"
            time={cancelledOrder.orderDate}
          >
            <OrderCancel
              cancelledOrder={cancelledOrder}
              key={cancelledOrder.id}
            />
          </OrderNumber>
        ))}
      </div>
    </section>
  );
}

export default OrderCancelWidget;
