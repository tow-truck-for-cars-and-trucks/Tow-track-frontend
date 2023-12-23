import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../my-order/model/all-orders-slice';
import OrderComplete from '../../features/order-complete/order-complete';
import './order-completed-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';

function OrderCompletedWidget() {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.allOrders.completedOrders);

  useEffect(() => {
    dispatch(getOrders('завершенный'));
  }, []);

  return (
    <section className="order-completed" data-testid="comleted-order-widget">
      <div className="order-completed__container">
        {orders.length === 0 ? (
          <p className="order-completed__caption">
            У вас пока нет завершенных заказов
          </p>
        ) : (
          orders.map((order) => (
            <OrderNumber
              key={order.id}
              number={order.id}
              date={order.orderDate}
            >
              <OrderComplete key={order.id} id={order.id} />
            </OrderNumber>
          ))
        )}
      </div>
    </section>
  );
}

export default OrderCompletedWidget;
