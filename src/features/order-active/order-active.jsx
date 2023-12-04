import './order-active.scss';
import React, { useState } from 'react';
import DeliveryTime from '../../shared/ui/delivery-time/delivery-time';
import ProgressBar from '../../shared/ui/progress-bar/progress-bar';
import StepOneDefaultIcon from '../../shared/ui/icons/step-one-default-icon';
import StepTwoFillIcon from '../../shared/ui/icons/step-two-fill-icon';
import StepThreeDisableIcon from '../../shared/ui/icons/step-three-disable-icon';
import StepFourDisableIcon from '../../shared/ui/icons/step-four-disable-icon';
import Address from '../../shared/ui/adress/adress';
import Alert from '../../shared/ui/alert/alert';
import Button from '../../shared/ui/button/button';
import Accordion from '../../shared/ui/accordion/accordion';
import OrderDetails from '../../shared/ui/order-details/order-details';
import AboutTrack from '../../shared/ui/about-truck/about-truck';
import PopupCancel from '../../entities/ui/popup-cancel/popup-cancel';
import {
  getCarTypeStorage,
  getTariffStorage,
} from '../../shared/api/storage-api';

function OrderActive({ activeOrder, cancelOrder }) {
  const [isPopupCancel, setIsPopupCancel] = useState(false);
  const driverPhoneNumber = '88801112222';

  const handleCallDriver = () => {
    console.log('Выполняется вызов водителя:', driverPhoneNumber);
    window.location.href = `tel:${driverPhoneNumber}`;
  };

  return (
    <main className="order-active">
      <div className="order-active__submission-time">
        <DeliveryTime date={activeOrder.orderDate} />
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
        <Address
          addressFrom={activeOrder.addressFrom}
          addressTo={activeOrder.addressTo}
        />
      </div>
      <div className="order-active__price">
        <p className="order-active__price-title">Стоимость заказа</p>
        <p className="order-active__price-total">{activeOrder.total} ₽</p>
      </div>
      <div className="order-active__alert">
        <Alert />
      </div>
      <div className="order-active__button">
        <Button
          primary
          label="Связаться с водителем"
          onClick={handleCallDriver}
        />
      </div>
      <Button
        secondary
        label="Отменить заказ"
        onClick={() => setIsPopupCancel(true)}
      />
      <PopupCancel
        isOpen={isPopupCancel}
        cancelOrder={cancelOrder}
        onClose={() => setIsPopupCancel(false)}
      />
      <div className="order-active__info">
        <Accordion title="Детали заказа" withBorder>
          <OrderDetails
            tariff={
              getTariffStorage().find((x) => x.id === activeOrder?.tariff)?.name
            }
            carType={
              getCarTypeStorage().find((x) => x.id === activeOrder?.carType)
                ?.car_type
            }
            wheelLock={activeOrder.wheelLock}
            towin={activeOrder.towin ? 'Да' : 'Нет'}
            delay={activeOrder.orderDate ? 'Да' : 'Нет'}
            comment={activeOrder.comment}
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
