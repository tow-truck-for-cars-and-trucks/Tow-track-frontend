import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import orderApi from '../../shared/api/order-api';
import OrderSuccess from '../../features/order-success/order-success';
import './order-success-widget.scss';
import { cancelOrderRequest, resetState } from './model/success-order-slice';

/**
 * @param {number} orderNumber - number of the order
 */
function OrderSuccessWidget() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { status } = useSelector((store) => store.successOrder);
  const dispatch = useDispatch();
  const [activeOrder, setActiveOrder] = useState({
    addressFrom: null,
    addressTo: null,
    carType: null,
    orderDate: null,
    tariff: null,
    wheelLock: null,
    delay: null,
    towin: null,
    comment: null,
  });

  useEffect(() => {
    orderApi
      .getOrder(id, { status: 'Активный' })
      .then((order) => setActiveOrder(order));
    // .catch(console.error);
  }, [id]);

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
      <OrderSuccess
        activeOrder={activeOrder}
        cancelOrder={() => dispatch(cancelOrderRequest(id))}
      />
    </section>
  );
}

export default OrderSuccessWidget;
