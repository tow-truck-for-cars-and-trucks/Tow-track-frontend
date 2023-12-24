import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import orderApi from '../../shared/api/order-api';
import { getOrder } from '../../features/create-order/model/create-order-slice';
import OrderSuccess from '../../features/order-success/order-success';
import './order-success-widget.scss';
import redirectUnauthUser from '../../shared/utils/redirect-user';

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

  function cancelOrder() {
    orderApi
      .updateOrderStatus(id, 'Отмененный')
      .then(() => {
        navigate('/?open=main', { replace: true });
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) redirectUnauthUser();
      });
  }

  return (
    <section className="order-successfully">
      <div className="order-successfully__header">
        <div className="order-successfully__wrapper">
          <h1 className="order-successfully__title-border">
            Заказ №{activeOrder.id}{' '}
          </h1>
          <p className="order-successfully__title">успешно</p>
        </div>
        <p className="order-successfully__title">оформлен!</p>
      </div>
      <OrderSuccess cancelOrder={() => cancelOrder()} />
    </section>
  );
}

export default OrderSuccessWidget;
