import ButtonCounter from './buttonCounter';
import MinusDarkIcon from '../icons/minus-dark-icon';
import PlusDarkIcon from '../icons/plus-dark-icon';
import MinusIcon from '../icons/minus-icon';
import PlusIcon from '../icons/plus-icon';

export default {
  title: 'Shared/ButtonCounter',
  component: ButtonCounter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export const MinusDarkIconButton = {
  args: {
    primary: true,
    disabled: false,
    icon: <MinusDarkIcon width="24px" height="24px" />,
  },
};

export const PlusDarkIconButton = {
  args: {
    primary: true,
    disabled: false,
    icon: <PlusDarkIcon width="24px" height="24px" />,
  },
};

export const MinusIconButton = {
  args: {
    primary: true,
    disabled: false,
    icon: <MinusIcon width="24px" height="24px" />,
  },
};

export const PlusIconButton = {
  args: {
    primary: true,
    disabled: false,
    icon: <PlusIcon width="24px" height="24px" />,
  },
};
