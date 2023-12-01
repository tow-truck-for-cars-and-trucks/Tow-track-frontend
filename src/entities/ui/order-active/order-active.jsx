import './order-active.scss';
import React, { useState } from 'react';
import DeliveryTime from '../../../shared/ui/delivery-time/delivery-time';
import ProgressBar from '../../../shared/ui/progress-bar/progress-bar';
import StepOneDefaultIcon from '../../../shared/ui/icons/step-one-default-icon';
import StepTwoFillIcon from '../../../shared/ui/icons/step-two-fill-icon';
import StepThreeDisableIcon from '../../../shared/ui/icons/step-three-disable-icon';
import StepFourDisableIcon from '../../../shared/ui/icons/step-four-disable-icon';
import Adress from '../../../shared/ui/adress/adress';
import Alert from '../../../shared/ui/alert/alert';
import Button from '../../../shared/ui/button/button';
import Accordion from '../../../shared/ui/accordion/accordion';
import OrderDetails from '../../../shared/ui/order-details/order-details';
import AboutTrack from '../../../shared/ui/about-truck/about-truck';
import PopupCancel from '../popup-cancel/popup-cancel';

function OrderActive() {
  const [isPopupCancel, setIsPopupCancel] = useState(false);
  return (
    <main className="order-active">
      <div className="order-active__submission-time">
        <DeliveryTime time="16:45" />
      </div>
      <ProgressBar
        icons={[
          <StepOneDefaultIcon width="40px" height="40px" />,
          <StepTwoFillIcon width="40px" height="40px" />,
          <StepThreeDisableIcon width="40px" height="40px" />,
          <StepFourDisableIcon width="40px" height="40px" />,
        ]}
        activeIndex={1}
        activeText="В пути"
      />
      <div className="order-active__adress">
        <Adress
          adressFrom="Москва, ул. Ленинградская, 28"
          adressTo="​Московская область, г. Сергиев Посад, Сергиевская улица, 10"
        />
      </div>
      <div className="order-active__price">
        <p className="order-active__price-title">Стоимость заказа</p>
        <p className="order-active__price-total">1820 ₽</p>
      </div>
      <div className="order-active__alert">
        <Alert />
      </div>
      <div className="order-active__button">
        <Button primary label="Связаться с водителем" />
      </div>
      <Button
        secondary
        label="Отменить заказ"
        onClick={() => setIsPopupCancel(true)}
      />
      <PopupCancel
        isOpen={isPopupCancel}
        onClose={() => setIsPopupCancel(false)}
      />
      <div className="order-active__info">
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
    </main>
  );
}

export default OrderActive;
