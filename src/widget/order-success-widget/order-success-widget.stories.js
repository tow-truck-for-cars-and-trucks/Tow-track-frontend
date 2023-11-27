import OrderSuccessWidget from './order-success-widget';

export default {
  title: 'Widget/OrderSuccessWidget',
  component: OrderSuccessWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    orderNumber: 1234,
  },
};
