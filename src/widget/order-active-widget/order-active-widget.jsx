import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../my-order/model/all-orders-slice';
import { updateOrder } from '../../features/create-order/model/create-order-slice';
import OrderActive from '../../features/order-active/order-active';
import './order-active-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';

function OrderActiveWidget() {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.allOrders.activeOrders);

  useEffect(() => {
    dispatch(getOrders('активный'));
  }, []);

  const updateOrderStatus = useCallback(
    (activeOrder) => {
      dispatch(updateOrder({ id: activeOrder.id, status: 'Отмененный' }));
    },
    [dispatch]
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
                cancelOrder={() => updateOrderStatus(order)}
              />
            </OrderNumber>
          ))
        )}
      </div>
    </section>
  );
}

export default OrderActiveWidget;
