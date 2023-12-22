import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import orderApi from '../../shared/api/order-api';
import { getOrders } from '../my-order/model/all-orders-slice';
import OrderCancel from '../../features/order-cancel/order-cancel';
import './order-cancel-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';
import redirectUnauthUser from '../../shared/utils/redirect-user';

function OrderCancelWidget() {
  const [allOrders, setAllOrders] = useState([]);
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.allOrders.cancelledOrders);

  useEffect(() => {
    dispatch(getOrders('отмененный'));
  }, []);

  const deleteOrder = useCallback((cancelledOrder) => {
    orderApi
      .deleteOrder(cancelledOrder.id, 'Отмененный')
      .then(() => {
        setAllOrders(allOrders.filter((o) => o.id !== cancelledOrder.id));
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) redirectUnauthUser();
      });
  }, []);

  return (
    <section className="order-cancelled" data-testid="cancelled-order-widget">
      <div className="order-cancelled__container">
        {orders.length === 0 ? (
          <p className="order-cancelled__caption">
            У вас пока нет отменных заказов
          </p>
        ) : (
          orders.map((order) => (
            <OrderNumber
              key={order.id}
              number={order.id}
              date={order.orderDate}
            >
              <OrderCancel
                deleteOrder={deleteOrder}
                id={order.id}
                key={order.id}
              />
            </OrderNumber>
          ))
        )}
      </div>
    </section>
  );
}

export default OrderCancelWidget;
