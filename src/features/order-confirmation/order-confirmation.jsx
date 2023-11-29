import './order-confirmation.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import orderApi from '../../shared/api/order-api';
import PagesTitle from '../../shared/ui/pages-title/pages-title';
import Input from '../../shared/ui/input/input';
import ChipsList from '../../entities/ui/chips-list/chips-list';
import OrderDetails from '../../shared/ui/order-details/order-details';
import BackButton from '../../shared/ui/back-button/back-button';
import TotalPrice from '../../shared/ui/total-price/total-price';

function OrderConfirmation() {
  const [activeTab, setActiveTab] = useState('cash');
  const [newOrder, setNewOrder] = useState(null);
  const { id } = useParams();

  function confirmOrder() {
    return orderApi.getOrder(id).then((ord) => {
      setNewOrder(ord);
    });
  }

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
          <p className="order-confirmation__description" />
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
          pricing={newOrder.tariff}
          carType={newOrder.carType}
          wheelLock={newOrder.wheelLock}
          cuvetteWork={newOrder.towin ? 'Да' : 'Нет'}
          deferredOrder={newOrder.delay ? newOrder.orderDate : 'Нет'}
          comment={newOrder.addition}
        />
        <div className="order-confirmation__price">
          <TotalPrice
            total={newOrder.total}
            onClick={(order) => confirmOrder(order)}
            isButtonActive
          />
        </div>
      </div>
    </main>
  );
}

export default OrderConfirmation;
