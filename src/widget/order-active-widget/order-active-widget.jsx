import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import orderApi from '../../shared/api/order-api';
import { getOrders } from '../my-order/model/all-orders-slice';
import OrderActive from '../../features/order-active/order-active';
import './order-active-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';
import redirectUnauthUser from '../../shared/utils/redirect-user';

function OrderActiveWidget() {
  const [allOrders, setAllOrders] = useState([]);
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.allOrders.activeOrders);

  useEffect(() => {
    dispatch(getOrders('активный'));
  }, []);

  const cancelOrder = useCallback(
    (activeOrder) => {
      orderApi
        .updateOrderStatus(activeOrder.id, 'Отменный')
        .then(() => {
          setAllOrders(allOrders.filter((o) => o.id !== activeOrder.id));
        })
        .catch((error) => {
          console.log(error);
          if (error.response.status === 401) redirectUnauthUser();
        });
    },
    [orders]
  );

  return (
    <section className="order-activated" data-testid="active-order-widget">
      <div className="order-activated__container">
        {orders.length === 0 ? (
          <p className="order-activated__caption">
            У вас пока нет активных заказов
          </p>
        ) : (
          orders.map((order) => (
            <OrderNumber
              key={order.id}
              number={order.id}
              date={order.orderDate}
            >
              <OrderActive
                id={order.id}
                key={order.id}
                cancelOrder={() => cancelOrder(order)}
              />
            </OrderNumber>
          ))
        )}
      </div>
    </section>
  );
}

export default OrderActiveWidget;
