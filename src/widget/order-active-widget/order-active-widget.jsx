import { useState, useEffect, useCallback } from 'react';
import orderApi from '../../shared/api/order-api';
import OrderActive from '../../features/order-active/order-active';
import './order-active-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';

function OrderActiveWidget() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderApi
      .getAllOrders('акт')
      .then((order) => setOrders(order))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const cancelOrder = useCallback(
    (activeOrder) => {
      orderApi
        .updateOrderStatus(activeOrder.id, 'Отмененный')
        .then(() => {
          setOrders(orders.filter((o) => o.id !== activeOrder.id));
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [orders]
  );

  return (
    <section className="order-activated">
      <div className="order-activated__container">
        {orders.length === 0 ? (
          <p className="order-activated__caption">
            У вас пока нет активных заказов
          </p>
        ) : (
          orders.map((activeOrder) => (
            <OrderNumber number={activeOrder.id} date={activeOrder.orderDate}>
              <OrderActive
                activeOrder={activeOrder}
                key={activeOrder.id}
                cancelOrder={() => cancelOrder(activeOrder)}
              />
            </OrderNumber>
          ))
        )}
      </div>
    </section>
  );
}

export default OrderActiveWidget;
