import './order-complet.scss';
import React, { useState } from 'react';
import Address from '../../../shared/ui/adress/adress';
import Button from '../../../shared/ui/button/button';
import Accordion from '../../../shared/ui/accordion/accordion';
import OrderDetails from '../../../shared/ui/order-details/order-details';
import AboutTrack from '../../../shared/ui/about-truck/about-truck';
import CloseIcon from '../../../shared/ui/icons/close-icon';
import PopupReviews from '../popup-reviews/popup-reviews';
import {
  getCarTypeStorage,
  getTariffStorage,
} from '../../../shared/api/storage-api';

function OrderComplete({ completedOrder }) {
  const [isPopupReviews, setIsPopupReviews] = useState(false);
  return (
    <main className="order-complet">
      <div className="order-complet__address">
        <Address
          addressFrom={completedOrder.addressFrom}
          addressTo={completedOrder.addressTo}
        />
      </div>
      <div className="order-complet__price">
        <p className="order-complet__price-title">Стоимость заказа</p>
        <p className="order-complet__price-total">{completedOrder.total} ₽</p>
      </div>
      <div className="order-complet__button">
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
      <div className="order-complet__info">
        <Accordion title="Детали заказа" withBorder>
          <OrderDetails
            tariff={
              getTariffStorage().find((x) => x.id === completedOrder?.tariff)
                ?.name
            }
            carType={
              getCarTypeStorage().find((x) => x.id === completedOrder?.carType)
                ?.car_type
            }
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
      <button className="order-complet__delete" type="button">
        <CloseIcon width="16px" height="16px" />
        Удалить запись
      </button>
    </main>
  );
}

export default OrderComplete;
