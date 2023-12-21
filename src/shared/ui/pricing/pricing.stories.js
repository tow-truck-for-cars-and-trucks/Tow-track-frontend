import Pricing from './pricing';
import InfoIcon from '../icons/info-icon';

export default {
  title: 'Shared/Pricing',
  component: Pricing,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = {
  args: {
    title: 'Эконом',
    description: 'Оптимальный',
    price: '1500',
  },
};

export const Active = {
  args: {
    title: 'Эконом',
    description: 'Оптимальный',
    price: '1500',
    info: 'Предоставляется стандартный эвакуатор, способный перевозить легковые и некрупные автомобили.',
    icon: <InfoIcon width="16px" height="16px" />,
    isActive: true,
  },
};
