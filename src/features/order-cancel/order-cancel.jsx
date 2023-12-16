import './order-cancel.scss';
import { useSelector } from 'react-redux';
import { getCarTypeTitle } from '../create-order/model/car-type-slice';
import { getPlanTitle } from '../create-order/model/plan-slice';
import Address from '../../shared/ui/address/address';
import Accordion from '../../shared/ui/accordion/accordion';
import OrderDetails from '../../shared/ui/order-details/order-details';
import AboutTrack from '../../shared/ui/about-truck/about-truck';
import CloseIcon from '../../shared/ui/icons/close-icon';

function OrderCancel({ cancelledOrder, deleteOrder }) {
  const carType = useSelector((state) =>
    getCarTypeTitle(state, cancelledOrder)
  );
  const tariff = useSelector((state) => getPlanTitle(state, cancelledOrder));

  return (
    <main className="order-cancel">
      <div className="order-cancel__address">
        <Address
          addressFrom={cancelledOrder.addressFrom}
          addressTo={cancelledOrder.addressTo}
        />
      </div>
      <div className="order-cancel__price">
        <p className="order-cancel__price-title">Стоимость заказа</p>
        <p className="order-cancel__price-total">{cancelledOrder.total} ₽</p>
      </div>
      <div className="order-cancel__info">
        <Accordion title="Детали заказа" withBorder>
          <OrderDetails
            tariff={tariff}
            carType={carType}
            wheelLock={cancelledOrder.wheelLock}
            towin={cancelledOrder.towin ? 'Да' : 'Нет'}
            delay={cancelledOrder.orderDate ? 'Да' : 'Нет'}
            comment={cancelledOrder.comment}
          />
        </Accordion>
        <Accordion title="Информация о машине и водителе" withBorder>
          <AboutTrack
            modelCar={cancelledOrder.modelCar}
            licensePlates={cancelledOrder.licensePlates}
            driver={cancelledOrder.driver}
            avarageScore={cancelledOrder.avarageScore}
          />
        </Accordion>
      </div>
      <button
        className="order-cancel__delete"
        type="button"
        onClick={() => deleteOrder(cancelledOrder)}
      >
        <CloseIcon width="16px" height="16px" />
        Удалить запись
      </button>
    </main>
  );
}

export default OrderCancel;
