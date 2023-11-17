// import { MemoryRouter } from 'react-router-dom';
import OrderConfirmation from './order-confirmation';

export default {
  title: 'entities/OrderConfirmation',
  component: OrderConfirmation,
  tags: ['autodocs'],
  arg: {
    primary: true,
  },
  /* decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ], */
};

export const Default = {};
