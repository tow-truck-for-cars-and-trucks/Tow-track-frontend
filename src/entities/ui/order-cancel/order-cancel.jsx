import './order-cancel.scss';
import React, { useState } from 'react';
import Adress from '../../../shared/ui/adress/adress';
import Button from '../../../shared/ui/button/button';
import Accordion from '../../../shared/ui/accordion/accordion';
import OrderDetails from '../../../shared/ui/order-details/order-details';
import AboutTrack from '../../../shared/ui/about-truck/about-truck';
import CloseIcon from '../../../shared/ui/icons/close-icon';
import PopupReviews from '../popup-reviews/popup-reviews';

function OrderCancel() {
  const [isPopupReviews, setIsPopupReviews] = useState(false);
  return (
    <main className="order-cancel">
      <div className="order-cancel__address">
        <Adress
          adressFrom="Москва, ул. Ленинградская, 28"
          adressTo="​Московская область, г. Сергиев Посад, Сергиевская улица, 10"
        />
      </div>
      <div className="order-cancel__price">
        <p className="order-cancel__price-title">Стоимость заказа</p>
        <p className="order-cancel__price-total">1820 ₽</p>
      </div>
      <div className="order-cancel__button">
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
      <div className="order-cancel__info">
        <Accordion title="Детали заказа" withBorder>
          <OrderDetails
            tariff="Эконом"
            carType="Легковой автомобиль"
            wheelLock="0"
            towin="Нет"
            delay="Нет"
            comment="Еще один очень важный комментарий"
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
      <button className="order-cancel__delete" type="button">
        <CloseIcon width="16px" height="16px" />
        Удалить запись
      </button>
    </main>
  );
}

export default OrderCancel;
