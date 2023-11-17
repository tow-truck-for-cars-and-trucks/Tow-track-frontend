import ProgressBar from './progress-bar';
import StepOneDefaultIcon from '../icons/step-one-default-icon';
import StepTwoFillIcon from '../icons/step-two-fill-icon';
import StepThreeDisableIcon from '../icons/step-three-disable-icon';
import StepFourDisableIcon from '../icons/step-four-disable-icon';

export default {
  title: 'Shared/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    icons: [
      <StepOneDefaultIcon width="40px" height="40px" />,
      <StepTwoFillIcon width="40px" height="40px" />,
      <StepThreeDisableIcon width="40px" height="40px" />,
      <StepFourDisableIcon width="40px" height="40px" />,
    ],
    activeIndex: 2,
    activeText: 'В пути',
  },
};
