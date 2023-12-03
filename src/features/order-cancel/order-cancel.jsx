import './order-cancel.scss';
import Address from '../../shared/ui/adress/adress';
import Accordion from '../../shared/ui/accordion/accordion';
import OrderDetails from '../../shared/ui/order-details/order-details';
import AboutTrack from '../../shared/ui/about-truck/about-truck';
import CloseIcon from '../../shared/ui/icons/close-icon';
import {
  getCarTypeStorage,
  getTariffStorage,
} from '../../shared/api/storage-api';

function OrderCancel({ cancelledOrder }) {
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
              getTariffStorage().find((x) => x.id === cancelledOrder?.tariff)
                ?.name
            }
            carType={
              getCarTypeStorage().find((x) => x.id === cancelledOrder?.carType)
                ?.car_type
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
      <button className="order-cancel__delete" type="button">
        <CloseIcon width="16px" height="16px" />
        Удалить запись
      </button>
    </main>
  );
}

export default OrderCancel;
