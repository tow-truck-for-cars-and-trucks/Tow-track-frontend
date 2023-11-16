import { MemoryRouter } from 'react-router-dom';
import Menu from './menu';

export default {
  title: 'Widget/Menu',
  component: Menu,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {};
