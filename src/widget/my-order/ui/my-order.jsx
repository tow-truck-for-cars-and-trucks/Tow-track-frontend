import './my-order.scss';
import { useEffect, useState } from 'react';
import PagesTitle from '../../../shared/ui/pages-title/pages-title';
import ChipsList from '../../../entities/ui/chips-list/chips-list';
import OrderActiveWidget from '../../order-active-widget/order-active-widget';
import OrderCompletedWidget from '../../order-completed-widget/order-completed-widget';
import OrderCancelWidget from '../../order-cancel-widget/order-cancel-widget';

function MyOrder() {
  const [activeTab, setActiveTab] = useState('active');
  const [selectedWidget, setSelectedWidget] = useState(null);

  useEffect(() => {
    if (activeTab === 'active') {
      setSelectedWidget(<OrderActiveWidget />);
    } else if (activeTab === 'completed') {
      setSelectedWidget(<OrderCompletedWidget />);
    } else if (activeTab === 'cancelled') {
      setSelectedWidget(<OrderCancelWidget />);
    } else {
      setSelectedWidget(null);
    }
  }, [activeTab]);

  return (
    <main className="my-order" data-testid="my-order">
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
