import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getOrder } from '../../features/create-order/model/create-order-slice';
import OrderSuccess from '../../features/order-success/order-success';
import './order-success-widget.scss';
import { cancelOrderRequest, resetState } from './model/success-order-slice';

/**
 * @param {number} orderNumber - number of the order
 */
function OrderSuccessWidget() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((store) => store.successOrder);

  useEffect(() => {
    dispatch(getOrder(id));
  }, [dispatch, id]);

  const activeOrder = useSelector((store) => store.createOrder.order);

  useEffect(() => {
    if (status === 'canceled') {
      navigate('/?open=main', { replace: true });
    }
  }, [status, navigate]);

  useEffect(() => () => dispatch(resetState()), [dispatch]);

  return (
    <section className="order-successfully">
      <div className="order-successfully__header">
        <div className="order-successfully__wrapper">
          <h1 className="order-successfully__title-border">
            Заказ №{activeOrder.id}{' '}
          </h1>
          {status === 'active' ? (
            <p className="order-successfully__title">успешно</p>
          ) : (
            <p className="order-successfully__title">отменен!</p>
          )}
        </div>
        {status === 'active' && (
          <p className="order-successfully__title">оформлен!</p>
        )}
      </div>
      <OrderSuccess cancelOrder={() => cancelOrderRequest(id)} />
    </section>
  );
}

export default OrderSuccessWidget;
