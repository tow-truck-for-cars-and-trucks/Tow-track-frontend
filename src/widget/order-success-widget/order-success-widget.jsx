import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import orderApi from '../../shared/api/order-api';
import OrderSuccess from '../../features/order-success/order-success';
import './order-success-widget.scss';

/**
 * @param {number} orderNumber - number of the order
 */
function OrderSuccessWidget() {
  const { id } = useParams();
  const navigate = useNavigate();
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
      .getOrderWithParams(id, { status: 'Активный' })
      .then((order) => setActiveOrder(order))
      .catch(console.error);
  }, []);

  function cancelOrder() {
    orderApi
      .updateOrderStatus(id, 'Активный', 'Отмененный')
      .then(() => {
        navigate('/?open=main', { replace: true });
      })
      .catch(console.error);
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
      <OrderSuccess
        activeOrder={activeOrder}
        cancelOrder={() => cancelOrder()}
      />
    </section>
  );
}

export default OrderSuccessWidget;
