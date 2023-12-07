import Address from './address';

export default {
  title: 'Shared/Address',
  component: Address,
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
