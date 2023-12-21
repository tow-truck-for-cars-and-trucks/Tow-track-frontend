import './order-complete.scss';
import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCarTypeTitle } from '../create-order/model/car-type-slice';
import { deleteOrder } from '../../widget/my-order/model/all-orders-slice';
import { getPlanTitle } from '../create-order/model/plan-slice';
import Address from '../../shared/ui/address/address';
import Button from '../../shared/ui/button/button';
import Accordion from '../../shared/ui/accordion/accordion';
import OrderDetails from '../../shared/ui/order-details/order-details';
import AboutTruck from '../../shared/ui/about-truck/about-truck';
import CloseIcon from '../../shared/ui/icons/close-icon';
import PopupReviews from '../../entities/ui/popup-reviews/popup-reviews';

function OrderComplete({ id }) {
  const [isPopupReviews, setIsPopupReviews] = useState(false);
  const dispatch = useDispatch();

  const deletedOrder = useCallback(() => {
    dispatch(deleteOrder(id));
  }, []);
  const order = useSelector((store) =>
    store.allOrders.completedOrders.find((o) => o.id === id)
  );
  const carType = useSelector((state) => getCarTypeTitle(state, order));
  const tariff = useSelector((state) => getPlanTitle(state, order));

  return (
    <main className="order-complete">
      <div className="order-complete__address">
        <Address addressFrom={order.addressFrom} addressTo={order.addressTo} />
      </div>
      <div className="order-complete__price">
        <p className="order-complete__price-title">Стоимость заказа</p>
        <p className="order-complete__price-total">{order.total} ₽</p>
      </div>
      {order.isHavingFeedback ? null : (
        <div className="order-complete__button">
          <Button
            primary="true"
            label="Оставить отзыв"
            onClick={() => setIsPopupReviews(true)}
          />
        </div>
      )}
      <PopupReviews
        id={order.id}
        isOpen={isPopupReviews}
        onClose={() => setIsPopupReviews(false)}
      />
      <div className="order-complete__info">
        <Accordion title="Детали заказа" withBorder>
          <OrderDetails
            tariff={tariff}
            carType={carType}
            wheelLock={order.wheelLock}
            towin={order.towin ? 'Да' : 'Нет'}
            delay={order.delay ? 'Да' : 'Нет'}
            comment={order.comment}
          />
        </Accordion>
        <Accordion title="Информация о машине и водителе" withBorder>
          <AboutTruck
            modelCar={order?.modelCar}
            licensePlates={order?.licensePlates}
            driver={order?.driver}
            avarageScore={order?.avarageScore}
          />
        </Accordion>
      </div>
      <button
        className="order-complete__delete"
        type="button"
        onClick={() => deletedOrder()}
      >
        <CloseIcon width="16px" height="16px" />
        Удалить запись
      </button>
    </main>
  );
}

export default OrderComplete;
