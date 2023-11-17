// eslint-disable-next-line import/no-unresolved
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
