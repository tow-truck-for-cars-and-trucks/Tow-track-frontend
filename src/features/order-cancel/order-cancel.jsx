import './order-cancel.scss';
import { useSelector } from 'react-redux';
import { getCarTypeTitle } from '../create-order/model/car-type-slice';
import { getPlanTitle } from '../create-order/model/plan-slice';
import Address from '../../shared/ui/address/address';
import Accordion from '../../shared/ui/accordion/accordion';
import OrderDetails from '../../shared/ui/order-details/order-details';
import AboutTruck from '../../shared/ui/about-truck/about-truck';
import CloseIcon from '../../shared/ui/icons/close-icon';

function OrderCancel({ id, deleteOrder }) {
  const order = useSelector((store) =>
    store.allOrders.cancelleddOrders.find((o) => o.id === id)
  );
  const carType = useSelector((state) => getCarTypeTitle(state, order));
  const tariff = useSelector((state) => getPlanTitle(state, order));

  return (
    <main className="order-cancel">
      <div className="order-cancel__address">
        <Address addressFrom={order.addressFrom} addressTo={order.addressTo} />
      </div>
      <div className="order-cancel__price">
        <p className="order-cancel__price-title">Стоимость заказа</p>
        <p className="order-cancel__price-total">{order.total} ₽</p>
      </div>
      <div className="order-cancel__info">
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
      <button
        className="order-cancel__delete"
        type="button"
        onClick={() => deleteOrder(order)}
      >
        <CloseIcon width="16px" height="16px" />
        Удалить запись
      </button>
    </main>
  );
}

export default OrderCancel;
