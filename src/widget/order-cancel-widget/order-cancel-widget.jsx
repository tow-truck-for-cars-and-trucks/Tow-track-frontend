import { useState, useEffect, useCallback } from 'react';
import orderApi from '../../shared/api/order-api';
import OrderCancel from '../../features/order-cancel/order-cancel';
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

  const deleteOrder = useCallback((cancelledOrder) => {
    orderApi.deleteOrder(cancelledOrder.id, 'Отмененный').then(() => {
      setOrders(orders.filter((o) => o.id !== cancelledOrder.id));
    });
  }, []);

  return (
    <section className="order-cancelled">
      <div className="order-cancelled__container">
        {orders.map((cancelledOrder) => (
          <OrderNumber
            number={cancelledOrder.id}
            date={cancelledOrder.orderDate}
          >
            <OrderCancel
              deleteOrder={deleteOrder}
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
