import { useArgs } from '@storybook/preview-api';
// import NavigationArrowIcon from '../icons/navigation-arrow-icon';
import ProfileInput from './profile-input';

const defaultStory = {
  title: 'Shared/ProfileInput',
  component: ProfileInput,
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
    placeholderStatic: false,
    readonly: false,
  },
};

export default defaultStory;

export const EmptyTextField = {
  args: {
    placeholder: 'Ваше имя',
    placeholderStatic: true,
    invalid: false,
  },
};
