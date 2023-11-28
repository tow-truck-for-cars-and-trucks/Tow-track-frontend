import './order-confirmation.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import orderApi from '../../shared/api/order-api';
import PagesTitle from '../../shared/ui/pages-title/pages-title';
// import Input from '../../shared/ui/input/input';
import ChipsList from '../../entities/ui/chips-list/chips-list';
import OrderDetails from '../../shared/ui/order-details/order-details';
import BackButton from '../../shared/ui/back-button/back-button';
import TotalPrice from '../../shared/ui/total-price/total-price';

function OrderConfirmation() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('cash');
  const [newOrder, setNewOrder] = useState([]);

  function confirmOrder(order) {
    return orderApi
      .createOrder(order)
      .then((ord) => {
        setNewOrder(ord);
      })
      .then(() => {
        navigate('/my-orders', { replace: true });
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
          {/* <Input placeholder="Откуда забрать" readonly="true" value={value} /> */}
        </div>
        <div className="order-confirmation__adress">
          {/* <Input placeholder="Куда доставить" readonly="true" value={value} /> */}
        </div>
        <div className="order-confirmation__submission-time">
          <p className="order-confirmation__description">
            Примерное время <span>подачи эвакуатора</span>
          </p>
          <p className="order-confirmation__description">
            {/* {hour} : {minute} */}
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
        // pricing={tariff}
        // carType={carType}
        // wheelLock={wheelLock}
        // cuvetteWork={towin}
        // deferredOrder={delay}
        // comment={addition}
        />
        <div className="order-confirmation__price">
          <TotalPrice
            // total={total}
            onClick={() => confirmOrder(newOrder)}
            isButtonActive
          />
        </div>
      </div>
    </main>
  );
}

export default OrderConfirmation;
