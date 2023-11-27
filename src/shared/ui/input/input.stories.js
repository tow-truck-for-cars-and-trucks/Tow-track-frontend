import { useArgs } from '@storybook/preview-api';
import NavigationArrowIcon from '../icons/navigation-arrow-icon';
import Input from './input';

const defaultStory = {
  title: 'Shared/Input',
  component: Input,
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

export const EmptyTextInput = {
  args: {
    placeholder: 'Откуда забрать',
    icon: <NavigationArrowIcon width="16px" height="16px" />,
    invalid: false,
  },
};

export const FilledTextInput = {
  args: {
    placeholder: 'Откуда забрать',
    value: 'Москва, ул. Ленинградская, д. 28',
    icon: <NavigationArrowIcon width="16px" height="16px" />,
    invalid: false,
  },
};

export const ErrorTextInput = {
  args: {
    placeholder: 'Откуда забрать',
    icon: <NavigationArrowIcon width="16px" height="16px" />,
    invalid: true,
  },
};

export const EmptyNumber = {
  args: {
    mask: '999 999 999',
    placeholder: '000 000 000',
    placeholderStatic: true,
    invalid: false,
  },
};

export const FilledNumber = {
  args: {
    value: '123 123 123',
    placeholderStatic: true,
    invalid: false,
  },
};

export const ErrorNumber = {
  args: {
    value: '123 123 123',
    placeholderStatic: true,
    invalid: true,
    errorText: 'Неверный код',
  },
};

export const EmptyPhoneNumber = {
  args: {
    mask: '+7 (999) 999 99 99',
    placeholder: '+ 7 (___) ___ __ __',
    placeholderStatic: true,
    invalid: false,
  },
};

export const FilledPhoneNumber = {
  args: {
    value: '+7 (999) 999 99 99',
    placeholderStatic: true,
    invalid: false,
  },
};

export const ErrorPhoneNumber = {
  args: {
    value: '+7 (999) 999 99 99',
    placeholderStatic: true,
    invalid: true,
  },
};

export const EmptyTextField = {
  args: {
    placeholder: 'Ваше имя',
    placeholderStatic: true,
    invalid: false,
  },
};

export const FilledTextField = {
  args: {
    value: 'Ольга',
    placeholderStatic: true,
    invalid: false,
  },
};

export const ReadOnlyTextField = {
  args: {
    value: 'Ольга',
    placeholderStatic: true,
    invalid: false,
    readonly: true,
  },
};

export const ErrorTextField = {
  args: {
    value: '12345',
    placeholderStatic: true,
    invalid: true,
  },
};
