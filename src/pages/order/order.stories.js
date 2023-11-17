// import { MemoryRouter } from 'react-router-dom';
import Order from './order';

export default {
  title: 'pages/Order',
  component: Order,
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
