import OrderDetails from './order-details';

export default {
  title: 'Shared/OrderDetails',
  component: OrderDetails,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    pricing: 'Эконом',
    carType: 'Легковой автомобиль',
    wheelLock: 0,
    cuvetteWork: 'Нет',
    deferredOrder: 'Нет',
    comment: 'Пробито колесо',
  },
};
