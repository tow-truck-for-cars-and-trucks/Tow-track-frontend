import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getOrder,
  updateOrder,
} from '../../features/create-order/model/create-order-slice';
import OrderSuccess from '../../features/order-success/order-success';
import './order-success-widget.scss';

/**
 * @param {number} orderNumber - number of the order
 */
function OrderSuccessWidget() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrder(id));
  }, [dispatch, id]);

  const activeOrder = useSelector((store) => store.createOrder.order);

  const updateOrderStatus = useCallback(() => {
    dispatch(updateOrder({ id, status: 'Отмененный' })).unwrap();
    navigate('/?open=main', { replace: true });
  }, [dispatch, id, navigate]);

  return (
    <section className="order-successfully">
      <div className="order-successfully__header">
        <div className="order-successfully__wrapper">
          <h1 className="order-successfully__title-border">
            Заказ №{activeOrder?.id}{' '}
          </h1>
          <p className="order-successfully__title">успешно</p>
        </div>
        <p className="order-successfully__title"> оформлен!</p>
      </div>
      <OrderSuccess cancelOrder={() => updateOrderStatus()} />
    </section>
  );
}

export default OrderSuccessWidget;
