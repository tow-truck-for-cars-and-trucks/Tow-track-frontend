import { useState, useEffect } from 'react';
import orderApi from '../../shared/api/order-api';
import OrderComplete from '../../features/order-complete/order-complete';
import './order-completed-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';

function OrderCompletedWidget() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderApi
      .getAllOrders('завершенный')
      .then((order) => setOrders(order))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="order-completed">
      <div className="order-completed__container">
        {orders.length === 0 ? (
          <p className="order-completed__caption">
            У вас пока нет завершенных заказов
          </p>
        ) : (
          orders.map((completedOrder) => (
            <OrderNumber
              number={completedOrder.id}
              date={completedOrder.orderDate}
            >
              <OrderComplete
                completedOrder={completedOrder}
                key={completedOrder.id}
              />
            </OrderNumber>
          ))
        )}
      </div>
    </section>
  );
}

export default OrderCompletedWidget;
