import DeliveryTime from './delivery-time';

export default {
  title: 'Shared/DeliveryTime',
  component: DeliveryTime,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    time: '16:45',
  },
};
