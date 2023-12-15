import AboutTruck from './about-truck';

export default {
  title: 'Shared/AboutTruck',
  component: AboutTruck,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    modelCar: 'Isuzu NPR-75LK',
    licensePlates: 'А 123 АА 77 RUS',
    driver: 'Константинопольский Иван',
    avarageScore: '5,0',
  },
};
