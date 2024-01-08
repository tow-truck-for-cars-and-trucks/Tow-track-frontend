import './order-success.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  setPopupsOpen,
  setPopupsClose,
  isPopupOpen,
} from '../../shared/ui/popup/model/popup-slice';
import { getCarTypeTitle } from '../create-order/model/car-type-slice';
import { getPlanTitle } from '../create-order/model/plan-slice';
import DeliveryTime from '../../shared/ui/delivery-time/delivery-time';
import ProgressBar from '../../shared/ui/progress-bar/progress-bar';
import Address from '../../shared/ui/address/address';
import Accordion from '../../shared/ui/accordion/accordion';
import OrderDetails from '../../shared/ui/order-details/order-details';
import Alert from '../../shared/ui/alert/alert';
import Button from '../../shared/ui/button/button';
import StepOneDefaultIcon from '../../shared/ui/icons/step-one-default-icon';
import StepTwoFillIcon from '../../shared/ui/icons/step-two-fill-icon';
import StepThreeDisableIcon from '../../shared/ui/icons/step-three-disable-icon';
import StepFourDisableIcon from '../../shared/ui/icons/step-four-disable-icon';
import PopupCancel from '../../entities/ui/popup-cancel/popup-cancel';
import PopupCancellations from '../../entities/ui/popup-cancellations/popup-cancellations';

/**
 * @param {object} activeOrder - object of success order
 */
function OrderSuccess({ cancelOrder }) {
  const activeOrder = useSelector((store) => store.createOrder.order);
  const carType = useSelector((state) => getCarTypeTitle(state, activeOrder));
  const tariff = useSelector((state) => getPlanTitle(state, activeOrder));
  const driverPhoneNumber = '88801112222';
  const dispatch = useDispatch();

  const handleCallDriver = () => {
    console.log('Выполняется вызов водителя:', driverPhoneNumber);
    window.location.href = `tel:${driverPhoneNumber}`;
  };

  return (
    <section className="order-success" data-testid="order-success">
      <div className="order-success__time">
        {activeOrder ? <DeliveryTime date={activeOrder?.orderDate} /> : ''}
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
        <Address
          addressFrom={activeOrder?.addressFrom}
          addressTo={activeOrder?.addressTo}
        />
      </div>
      <div className="order-success__price">
        <p className="order-success__price-title">Стоимость заказа</p>
        <p className="order-success__price-total">{activeOrder?.total} ₽</p>
      </div>
      <Accordion title="Информация о машине и водителе" withBorder={false}>
        <OrderDetails
          tariff={tariff}
          carType={carType}
          wheelLock={activeOrder?.wheelLock}
          towin={activeOrder?.towin ? 'Да' : 'Нет'}
          delay={activeOrder?.delay ? 'Да' : 'Нет'}
          comment={activeOrder?.comment}
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
        onClick={() => dispatch(setPopupsOpen('popup-cancel'))}
      />
      <PopupCancel
        isOpen={useSelector((state) => isPopupOpen(state, 'popup-cancel'))}
        messageText="Вы уверены, что хотите отменить заказ?"
        secondaryText="отменить"
        onClickPrimary={() => dispatch(setPopupsClose('popup-cancel'))}
        onClickSecondary={() => dispatch(setPopupsOpen('popup-cancellations'))}
      >
        <PopupCancellations cancelOrder={cancelOrder} />
      </PopupCancel>
    </section>
  );
}

export default OrderSuccess;
