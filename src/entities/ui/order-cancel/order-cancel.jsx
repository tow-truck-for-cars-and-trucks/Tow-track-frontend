import './order-cancel.scss';
import { useSelector } from 'react-redux';
import Address from '../../../shared/ui/adress/adress';
import Accordion from '../../../shared/ui/accordion/accordion';
import OrderDetails from '../../../shared/ui/order-details/order-details';
import AboutTrack from '../../../shared/ui/about-truck/about-truck';
import CloseIcon from '../../../shared/ui/icons/close-icon';

function OrderCancel({ cancelledOrder, deleteOrder }) {
  const allPricing = useSelector((store) => store.allPricing.tariff);
  const allCars = useSelector((store) => store.allCars.carType);

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
            tariff={
              allPricing.find((x) => x.id === cancelledOrder?.tariff)?.name
            }
            carType={
              allCars.find((x) => x.id === cancelledOrder?.carType)?.car_type
            }
            wheelLock={cancelledOrder.wheelLock}
            towin={cancelledOrder.towin ? 'Да' : 'Нет'}
            delay={cancelledOrder.orderDate ? 'Да' : 'Нет'}
            comment={cancelledOrder.comment}
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
