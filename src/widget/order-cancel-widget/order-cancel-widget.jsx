import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../my-order/model/all-orders-slice';
import OrderCancel from '../../features/order-cancel/order-cancel';
import './order-cancel-widget.scss';
import OrderNumber from '../../shared/ui/order-number/order-number';

function OrderCancelWidget() {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.allOrders.cancelledOrders);

  useEffect(() => {
    dispatch(getOrders('отмененный'));
  }, []);

  return (
    <section className="order-cancelled">
      <div className="order-cancelled__container">
        {orders.length === 0 ? (
          <p className="order-cancelled__caption">
            У вас пока нет отменных заказов
          </p>
        ) : (
          orders.map((order) => (
            <OrderNumber number={order.id} date={order.orderDate}>
              <OrderCancel id={order.id} key={order.id} />
            </OrderNumber>
          ))
        )}
      </div>
    </section>
  );
}

export default OrderCancelWidget;
