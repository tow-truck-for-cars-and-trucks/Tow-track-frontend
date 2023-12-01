import './my-order.scss';
import { useState } from 'react';
import PagesTitle from '../../shared/ui/pages-title/pages-title';
import ChipsList from '../../entities/ui/chips-list/chips-list';
import OrderActiveWidget from '../order-active-widget/order-active-widget';
import OrderCompletWidget from '../order-complet-widget/order-complet-widget';
import OrderCancelWidget from '../order-cancel-widget/order-cancel-widget';

function MyOrder() {
  const [activeTab, setActiveTab] = useState('active');

  let selectedWidget;

  if (activeTab === 'active') {
    selectedWidget = <OrderActiveWidget />;
  } else if (activeTab === 'completed') {
    selectedWidget = <OrderCompletWidget />;
  } else if (activeTab === 'cancelled') {
    selectedWidget = <OrderCancelWidget />;
  } else {
    selectedWidget = null; // Обработка других случаев, если необходимо
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

      {/* {activeTab === 'active' ? <OrderActiveWidget /> : <OrderCompletWidget />} */}
      {selectedWidget}
    </main>
  );
}

export default MyOrder;
