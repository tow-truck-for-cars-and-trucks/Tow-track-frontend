import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-react-router-v6';
import '../src/app/styles/index.scss';
import './preview.scss';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    reactRouter: reactRouterParameters({}),
  },
  decorators: [withRouter],
};

export default preview;
