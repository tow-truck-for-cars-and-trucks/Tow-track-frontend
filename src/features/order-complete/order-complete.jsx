import './order-complete.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getCarTypeTitle } from '../create-order/model/car-type-slice';
import { getPlanTitle } from '../create-order/model/plan-slice';
import Address from '../../shared/ui/address/address';
import Button from '../../shared/ui/button/button';
import Accordion from '../../shared/ui/accordion/accordion';
import OrderDetails from '../../shared/ui/order-details/order-details';
import AboutTrack from '../../shared/ui/about-truck/about-truck';
import CloseIcon from '../../shared/ui/icons/close-icon';
import PopupReviews from '../../entities/ui/popup-reviews/popup-reviews';

function OrderComplete({ completedOrder }) {
  const [isPopupReviews, setIsPopupReviews] = useState(false);
  const carType = useSelector((state) =>
    getCarTypeTitle(state, completedOrder)
  );
  const tariff = useSelector((state) => getPlanTitle(state, completedOrder));

  return (
    <main className="order-complete">
      <div className="order-complete__address">
        <Address
          addressFrom={completedOrder.addressFrom}
          addressTo={completedOrder.addressTo}
        />
      </div>
      <div className="order-complete__price">
        <p className="order-complete__price-title">Стоимость заказа</p>
        <p className="order-complete__price-total">{completedOrder.total} ₽</p>
      </div>
      <div className="order-complete__button">
        <Button
          primary="true"
          label="Оставить отзыв"
          onClick={() => setIsPopupReviews(true)}
        />
      </div>
      <PopupReviews
        isOpen={isPopupReviews}
        onClose={() => setIsPopupReviews(false)}
      />
      <div className="order-complete__info">
        <Accordion title="Детали заказа" withBorder>
          <OrderDetails
            tariff={tariff}
            carType={carType}
            wheelLock={completedOrder.wheelLock}
            towin={completedOrder.towin ? 'Да' : 'Нет'}
            delay={completedOrder.orderDate ? 'Да' : 'Нет'}
            comment={completedOrder.comment}
          />
        </Accordion>
        <Accordion title="Информация о машине и водителе" withBorder>
          <AboutTrack
            carModel="Isuzu NPR-75LK"
            carNumber="А 123 АА 77 RUS"
            carDriver="Константинопольский Иван"
            rating="5,0"
          />
        </Accordion>
      </div>
      <button className="order-complete__delete" type="button">
        <CloseIcon width="16px" height="16px" />
        Удалить запись
      </button>
    </main>
  );
}

export default OrderComplete;
