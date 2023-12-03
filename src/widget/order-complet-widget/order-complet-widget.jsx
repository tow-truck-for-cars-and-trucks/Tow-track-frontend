import { useState, useEffect } from 'react';
import orderApi from '../../shared/api/order-api';
import OrderComplete from '../../entities/ui/order-complet/order-complet';
import './order-complet-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';

function OrderCompletWidget() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderApi
      .getAllOrders('Завершенный')
      .then((order) => setOrders(order))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="order-completed">
      <div className="order-completed__container">
        {orders.map((completedOrder) => (
          <OrderNumber
            number={completedOrder.id}
            date="01.11.2023"
            time={completedOrder.orderDate}
          >
            <OrderComplete
              completedOrder={completedOrder}
              key={completedOrder.id}
            />
          </OrderNumber>
        ))}
      </div>
    </section>
  );
}

export default OrderCompletWidget;
