import './checkbox-radio.scss';
import RadioDisabled from '../icons/btn-radio-disabled';
import BtnRadio from '../icons/btn-radio';

function CheckboxRadio({ children, onChange, value, width, height, name }) {
  return (
    <label className="checkbox-radio" htmlFor={name}>
      <input
        className="checkbox-radio__input"
        type="checkbox"
        name={name}
        checked={value}
      />
      <button
        type="button"
        className="checkbox-radio__icons"
        aria-label="Чекбокс"
        tabIndex="0"
        onClick={() => onChange(!value)}
      >
        {value ? (
          <BtnRadio width={width} height={height} />
        ) : (
          <RadioDisabled width={width} height={height} />
        )}
      </button>
      {children}
    </label>
  );
}

export default CheckboxRadio;
