import './progress-bar.scss';
import StepOneDefaultIcon from '../icons/step-one-default-icon';
import StepTwoFillIcon from '../icons/step-two-fill-icon';
import StepThreeDisableIcon from '../icons/step-three-disable-icon';
import StepFourDisableIcon from '../icons/step-four-disable-icon';

function ProgressBar() {
  return (
    <div className="progress-bar">
      <StepOneDefaultIcon width="40px" height="40px" />
      <div className="progress-bar__border" />
      <StepTwoFillIcon width="40px" height="40px" />
      <div className="progress-bar__border" />
      <StepThreeDisableIcon width="40px" height="40px" />
      <div className="progress-bar__border" />
      <StepFourDisableIcon width="40px" height="40px" />
      <div className="progress-bar__border" />
    </div>
  );
}

export default ProgressBar;
