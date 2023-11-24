import './button-counter-controller.scss';
import ButtonCounter from '../../../shared/ui/button-counter/buttonCounter';
import MinusDarkIcon from '../../../shared/ui/icons/minus-dark-icon';
import MinusIcon from '../../../shared/ui/icons/minus-icon';
import PlusDarkIcon from '../../../shared/ui/icons/plus-dark-icon';
import PlusIcon from '../../../shared/ui/icons/plus-icon';
import Description from '../../../shared/ui/description/description';

function ButtonCounterController({ value, onChange }) {
  const count = Number(value);
  return (
    <div className="button-controller">
      <Description title="Блокировка колес" subtitle="Не могут вращаться" />
      <div className="button-controller__count">
        <ButtonCounter
          disabled={count === 0}
          onClick={() => onChange(count - 1)}
          icon={
            count > 0 ? (
              <MinusDarkIcon width="24px" height="24px" />
            ) : (
              <MinusIcon width="24px" height="24px" />
            )
          }
        />
        <span className="button-controller__span">{count}</span>
        <ButtonCounter
          disabled={count === 4}
          onClick={() => onChange(count + 1)}
          icon={
            count < 4 ? (
              <PlusDarkIcon width="24px" height="24px" />
            ) : (
              <PlusIcon width="24px" height="24px" />
            )
          }
        />
      </div>
    </div>
  );
}

export default ButtonCounterController;
