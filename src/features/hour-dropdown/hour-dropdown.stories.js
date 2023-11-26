import { useArgs } from '@storybook/preview-api';
import HourDropdown from './hour-dropdown';

export default {
  title: 'Features/HourDropdown',
  component: HourDropdown,
  decorators: [
    function Component(Story, ctx) {
      const [, setArgs] = useArgs();

      const onChange = (option) => {
        setArgs({ value: option.id });
      };

      return <Story args={{ ...ctx.args, onChange }} />;
    },
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {};
