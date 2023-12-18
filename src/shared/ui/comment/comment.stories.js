import { useArgs } from '@storybook/preview-api';
import Comment from './comment';

export default {
  title: 'Shared/Comment',
  component: Comment,
  decorators: [
    function Component(Story, ctx) {
      const [, setArgs] = useArgs();

      const onChange = (value) => {
        setArgs({ value });
      };

      return <Story args={{ ...ctx.args, onChange }} />;
    },
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Done = {
  args: {
    value: 'Не крутится руль, сломался усилитель',
  },
};
