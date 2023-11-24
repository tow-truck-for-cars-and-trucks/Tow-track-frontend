import './order-complet.scss';
import React, { useState } from 'react';
import Adress from '../../../shared/ui/adress/adress';
import Button from '../../../shared/ui/button/button';
import Accordion from '../../../shared/ui/accordion/accordion';
import OrderDetails from '../../../shared/ui/order-details/order-details';
import AboutTrack from '../../../shared/ui/about-truck/about-truck';
import CloseIcon from '../../../shared/ui/icons/close-icon';
import PopupReviews from '../popup-reviews/popup-reviews';

function OrderComplet() {
  const [isPopupReviews, setIsPopupReviews] = useState(false);
  return (
    <main className="order-complet">
      <div className="order-complet__adress">
        <Adress
          adressFrom="Москва, ул. Ленинградская, 28"
          adressTo="​Московская область, г. Сергиев Посад, Сергиевская улица, 10"
        />
      </div>
      <div className="order-complet__price">
        <p className="order-complet__price-title">Стоимость заказа</p>
        <p className="order-complet__price-total">1820 ₽</p>
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
            pricing="Эконом"
            carType="Легковой автомобиль"
            wheelLock="0"
            cuvetteWork="Нет"
            deferredOrder="Нет"
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
      <button className="order-complet__delete" type="button">
        <CloseIcon width="16px" height="16px" />
        Удалить запись
      </button>
    </main>
  );
}

export default OrderComplet;
