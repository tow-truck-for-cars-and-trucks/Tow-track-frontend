import './order-success.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import DeliveryTime from '../../shared/ui/delivery-time/delivery-time';
import ProgressBar from '../../shared/ui/progress-bar/progress-bar';
import Adress from '../../shared/ui/adress/adress';
import Accordion from '../../shared/ui/accordion/accordion';
import OrderDetails from '../../shared/ui/order-details/order-details';
import Alert from '../../shared/ui/alert/alert';
import Button from '../../shared/ui/button/button';
import StepOneDefaultIcon from '../../shared/ui/icons/step-one-default-icon';
import StepTwoFillIcon from '../../shared/ui/icons/step-two-fill-icon';
import StepThreeDisableIcon from '../../shared/ui/icons/step-three-disable-icon';
import StepFourDisableIcon from '../../shared/ui/icons/step-four-disable-icon';
import PopupCancel from '../../entities/ui/popup-cancel/popup-cancel';

/**
 * @param {object} activeOrder - object of success order
 */
function OrderSuccess({ activeOrder, cancelOrder }) {
  const allPricing = useSelector((store) => store.allPricing.tariff);
  const allCars = useSelector((store) => store.allCars.carType);
  const driverPhoneNumber = '88801112222';
  const [isPopupCancel, setIsPopupCancel] = useState(false);

  const handleCallDriver = () => {
    console.log('Выполняется вызов водителя:', driverPhoneNumber);
    window.location.href = `tel:${driverPhoneNumber}`;
  };

  return (
    <section className="order-success">
      <div className="order-success__time">
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
      <div className="order-success__adress">
        <Adress
          adressFrom={activeOrder.addressFrom}
          adressTo={activeOrder.addressTo}
        />
      </div>
      <div className="order-success__price">
        <p className="order-success__price-title">Стоимость заказа</p>
        <p className="order-success__price-total">{activeOrder.total} ₽</p>
      </div>
      <Accordion title="Информация о машине и водителе" withBorder={false}>
        <OrderDetails
          tariff={allPricing.find((x) => x.id === activeOrder?.tariff)?.name}
          carType={allCars.find((x) => x.id === activeOrder?.carType)?.car_type}
          wheelLock={activeOrder.wheelLock}
          towin={activeOrder.towin ? 'Да' : 'Нет'}
          delay={activeOrder.orderDate ? 'Да' : 'Нет'}
          comment={activeOrder.comment}
        />
      </Accordion>
      <div className="order-success__alert">
        <Alert />
      </div>
      <div className="order-success__button">
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
    </section>
  );
}

export default OrderSuccess;
