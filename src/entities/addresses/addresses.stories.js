import Addresses from './addresses';

export default {
  title: 'entities/Addresses',
  component: Addresses,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    placeholder: 'Куда доставить',
  },
};
