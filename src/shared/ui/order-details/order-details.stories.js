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
    tariff: 'Эконом',
    carType: 'Легковой автомобиль',
    wheelLock: 0,
    towin: 'Нет',
    delay: 'Нет',
    comment: 'Какой-то очень важный комментарий',
  },
};
