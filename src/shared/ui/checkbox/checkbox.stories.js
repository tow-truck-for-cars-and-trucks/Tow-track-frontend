import { useArgs } from '@storybook/preview-api';
import Checkbox from './checkbox';
import CheckboxAuthDescription from '../checkbox-auth-description/checkbox-auth-description';

const defaultStory = {
  title: 'Shared/Checkbox',
  component: Checkbox,
  decorators: [
    function Component(Story, ctx) {
      const [, setArgs] = useArgs();

      const onChange = (value) => {
        setArgs({ value });
        console.log(value);
      };

      return <Story args={{ ...ctx.args, onChange }} />;
    },
  ],
  parameters: {
    layout: 'centered',
  },
  args: {
    isRight: false,
  },
  tags: ['autodocs'],
};

export default defaultStory;

export const CheckboxDefault = {
  args: {
    children: [<CheckboxAuthDescription />],
    height: '16px',
    width: '16px',
    isRight: false,
  },
};
