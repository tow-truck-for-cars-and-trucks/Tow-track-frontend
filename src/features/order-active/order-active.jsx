import './order-active.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCarTypeTitle } from '../create-order/model/car-type-slice';
import { getPlanTitle } from '../create-order/model/plan-slice';
import { setPopupsOpen } from '../../shared/ui/popup/model/popup-slice';
import DeliveryTime from '../../shared/ui/delivery-time/delivery-time';
import ProgressBar from '../../shared/ui/progress-bar/progress-bar';
import StepOneDefaultIcon from '../../shared/ui/icons/step-one-default-icon';
import StepTwoFillIcon from '../../shared/ui/icons/step-two-fill-icon';
import StepThreeDisableIcon from '../../shared/ui/icons/step-three-disable-icon';
import StepFourDisableIcon from '../../shared/ui/icons/step-four-disable-icon';
import Address from '../../shared/ui/address/address';
import Alert from '../../shared/ui/alert/alert';
import Button from '../../shared/ui/button/button';
import Accordion from '../../shared/ui/accordion/accordion';
import OrderDetails from '../../shared/ui/order-details/order-details';
import AboutTruck from '../../shared/ui/about-truck/about-truck';
import PopupCancel from '../../entities/ui/popup-cancel/popup-cancel';
import handlePhoneCall from '../../shared/utils/helpers';

function OrderActive({ id, cancelOrder }) {
  const dispatch = useDispatch();

  const order = useSelector((store) =>
    store.allOrders.activeOrders.find((o) => o.id === id)
  );
  const carType = useSelector((state) => getCarTypeTitle(state, order));
  const tariff = useSelector((state) => getPlanTitle(state, order));
  const driverPhoneNumber = '88801112222';

  return (
    <main className="order-active" data-testid="order-active">
      <div className="order-active__submission-time">
        <DeliveryTime date={order.orderDate} />
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
        <Address addressFrom={order.addressFrom} addressTo={order.addressTo} />
      </div>
      <div className="order-active__price">
        <p className="order-active__price-title">Стоимость заказа</p>
        <p className="order-active__price-total">{order.total} ₽</p>
      </div>
      <div className="order-active__alert">
        <Alert />
      </div>
      <div className="order-active__button">
        <Button
          primary
          label="Связаться с водителем"
          onClick={() => handlePhoneCall(driverPhoneNumber, 'к водителю')}
        />
      </div>
      <Button
        secondary
        label="Отменить заказ"
        onClick={() => dispatch(setPopupsOpen('popup-cancel'))}
      />
      <PopupCancel cancelOrder={cancelOrder} />
      <div className="order-active__info">
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
            modelCar={order.modelCar}
            licensePlates={order.licensePlates}
            driver={order.driver}
            avarageScore={order.avarageScore}
          />
        </Accordion>
      </div>
    </main>
  );
}

export default OrderActive;
