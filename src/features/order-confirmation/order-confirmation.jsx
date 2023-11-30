import './order-confirmation.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMinutes, getHours } from 'date-fns';
import orderApi from '../../shared/api/order-api';
import {
  getTariffStorage,
  getCarTypeStorage,
} from '../../shared/api/storage-api';
import PagesTitle from '../../shared/ui/pages-title/pages-title';
import Input from '../../shared/ui/input/input';
import ChipsList from '../../entities/ui/chips-list/chips-list';
import OrderDetails from '../../shared/ui/order-details/order-details';
import BackButton from '../../shared/ui/back-button/back-button';
import TotalPrice from '../../shared/ui/total-price/total-price';

function OrderConfirmation() {
  const [activeTab, setActiveTab] = useState('cash');
  const [newOrder, setNewOrder] = useState({
    addressFrom: null,
    addressTo: null,
    carType: null,
    orderDate: null,
    tariff: null,
    wheelLock: null,
    delay: null,
    towin: null,
    comment: null,
  });
  const { id } = useParams();

  useEffect(() => {
    orderApi
      .getOrder(id)
      .then((order) => setNewOrder(order))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="order-confirmation">
      <div className="order-confirmation__back-button">
        <BackButton />
      </div>
      <PagesTitle title="Подтверждение заказа" />
      <div className="order-confirmation__form">
        <div className="order-confirmation__adress">
          <Input
            placeholder="Откуда забрать"
            readonly="true"
            value={newOrder.addressFrom}
          />
        </div>
        <div className="order-confirmation__adress">
          <Input
            placeholder="Куда доставить"
            readonly="true"
            value={newOrder.addressTo}
          />
        </div>
        <div className="order-confirmation__submission-time">
          <p className="order-confirmation__description">
            Примерное время <span>подачи эвакуатора</span>
          </p>
          <p className="order-confirmation__description">
            {' '}
            {String(getHours(new Date(newOrder.orderDate))).padStart(2, '0')}:
            {String(getMinutes(new Date(newOrder.orderDate)).padEnd(2, '0'))}
          </p>
        </div>
        <div className="order-confirmation__payment">
          <h2 className="order-confirmation__payment-title">Способ оплаты</h2>
          <div className="order-confirmation__payment-container">
            <ChipsList
              chips={[
                { label: 'Наличные', id: 'cash' },
                { label: 'Оплата по СБП', disabled: 'true', id: 'byCard' },
              ]}
              value={activeTab}
              onChange={(chips) => setActiveTab(chips)}
            />
          </div>
        </div>
        <OrderDetails
          tariff={
            getTariffStorage().find((x) => x.id === newOrder?.tariff)?.name
          }
          carType={
            getCarTypeStorage().find((x) => x.id === newOrder?.carType)
              ?.car_type
          }
          wheelLock={newOrder.wheelLock}
          towin={newOrder.towin ? 'Да' : 'Нет'}
          delay={newOrder.delay ? newOrder.orderDate : 'Нет'}
          comment={newOrder.comment}
        />
        <div className="order-confirmation__price">
          <TotalPrice total={newOrder.total} isButtonActive />
        </div>
      </div>
    </main>
  );
}

export default OrderConfirmation;
