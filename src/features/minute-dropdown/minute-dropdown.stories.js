import { useArgs } from '@storybook/preview-api';
import MinuteDropdown from './minute-dropdown';

export default {
  title: 'Features/MinuteDropdown',
  component: MinuteDropdown,
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
