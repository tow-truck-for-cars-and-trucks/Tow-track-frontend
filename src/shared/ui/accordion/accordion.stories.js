import AboutTruck from '../about-truck/about-truck';
import OrderDetails from '../order-details/order-details';
import Accordion from './accordion';

export default {
  title: 'Shared/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const AboutTruckStory = {
  args: {
    title: 'Информация о машине и водителе',
    children: [
      <AboutTruck
        modelCar="Isuzu NPR-75LK"
        licensePlates="А 123 АА 77 RUS"
        driver="Константинопольский Иван"
        avarageScore="5,0"
      />,
    ],
  },
};

export const AboutTruckWithOutBorder = {
  args: {
    title: 'Информация о машине и водителе',
    withBorder: false,
    children: [
      <AboutTruck
        modelCar="Isuzu NPR-75LK"
        licensePlates="А 123 АА 77 RUS"
        driver="Константинопольский Иван"
        avarageScore="5,0"
      />,
    ],
  },
};

export const OrderDetailsStory = {
  args: {
    title: 'Детали заказа',
    children: [
      <OrderDetails
        tariff="Эконом"
        carType="Легковой автомобиль"
        wheelLock="0"
        towin="Нет"
        delay="Нет"
        comment="Пробито колесо"
      />,
    ],
  },
};
