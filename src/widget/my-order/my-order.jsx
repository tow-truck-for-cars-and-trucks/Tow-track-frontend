import './my-order.scss';
import { useState } from 'react';
import PagesTitle from '../../shared/ui/pages-title/pages-title';
import ChipsList from '../../entities/ui/chips-list/chips-list';
import OrderActiveWidget from '../order-active-widget/order-active-widget';
import OrderCompletedWidget from '../order-completed-widget/order-completed-widget';
import OrderCancelWidget from '../order-cancel-widget/order-cancel-widget';

function MyOrder() {
  const [activeTab, setActiveTab] = useState('active');

  let selectedWidget;

  if (activeTab === 'active') {
    selectedWidget = <OrderActiveWidget />;
  } else if (activeTab === 'completed') {
    selectedWidget = <OrderCompletedWidget />;
  } else if (activeTab === 'cancelled') {
    selectedWidget = <OrderCancelWidget />;
  } else {
    selectedWidget = null;
  }

  return (
    <main className="my-order">
      <div className="my-order__title">
        <PagesTitle title="Мои заказы" />
      </div>
      <div className="my-order__navigation">
        <ChipsList
          chips={[
            { label: 'Активные', id: 'active' },
            { label: 'Завершенные', id: 'completed' },
            { label: 'Отмененные', id: 'cancelled' },
          ]}
          value={activeTab}
          onChange={(chips) => setActiveTab(chips)}
        />
      </div>

      {selectedWidget}
    </main>
  );
}

export default MyOrder;
