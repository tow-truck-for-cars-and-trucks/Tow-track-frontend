import { reactRouterParameters } from 'storybook-addon-react-router-v6';
import Header from './header';

export default {
  title: 'widget/Header',
  component: Header,
  tags: ['autodocs'],
  arg: {
    primary: true,
  },
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        path: '/',
      },
    }),
  },
};

export const Default = {};
