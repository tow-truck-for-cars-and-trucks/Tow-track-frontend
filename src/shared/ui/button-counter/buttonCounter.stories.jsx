import ButtonCounter from './buttonCounter';

export default {
  title: 'Shared/ButtonCounter',
  component: ButtonCounter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export const PrimaryDisabled = {
  args: {
    primary: true,
    disabled: false,
  },
};
