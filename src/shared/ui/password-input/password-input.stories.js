import { useArgs } from '@storybook/preview-api';
import PasswordInput from './password-input';

const defaultStory = {
  title: 'Shared/PasswordInput',
  component: PasswordInput,
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
  args: {
    invalid: true,
  },
};

export default defaultStory;

export const Default = {
  args: {
    placeholder: 'Введите пароль',
    invalid: false,
  },
};
