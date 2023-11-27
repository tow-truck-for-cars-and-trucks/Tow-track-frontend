import Adress from './adress';

export default {
  title: 'Shared/Adress',
  component: Adress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const AdressDefault = {
  args: {
    adressFrom: 'Москва, ул. Ленинградская, 28',
    adressTo: '​Московская область, г. Сергиев Посад, Сергиевская улица, 10',
  },
};
