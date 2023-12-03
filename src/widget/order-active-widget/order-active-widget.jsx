import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import orderApi from '../../shared/api/order-api';
import OrderActive from '../../features/order-active/order-active';
import './order-active-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';

function OrderActiveWidget() {
  const [orders, setOrders] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    orderApi
      .getAllOrders('Активный')
      .then((order) => setOrders(order))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function cancelOrder() {
    orderApi.updateOrderStatus(id, 'Активный', 'Отмененный').catch((error) => {
      console.log(error);
    });
  }

  return (
    <section className="order-activated">
      <div className="order-activated__container">
        {orders.map((activeOrder) => (
          <OrderNumber
            number={activeOrder.id}
            date="01.11.2023"
            time={activeOrder.orderDate}
          >
            <OrderActive
              activeOrder={activeOrder}
              key={activeOrder.id}
              cancelOrder={() => cancelOrder}
            />
          </OrderNumber>
        ))}
      </div>
    </section>
  );
}

export default OrderActiveWidget;
