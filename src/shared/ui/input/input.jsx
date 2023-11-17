/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './input.scss';
import InputMask from 'react-input-mask';
import CloseIcon from '../icons/close-icon';
import SuccessfullIcon from '../icons/successfull-icon';

/**
 * @param {string} value - value displayed within the input
 * @param {string} placeholder - placeholder of the input
 * @param {function} onChange: (e: string) => void - fired with the new value of the input each time it changes
 * @param {JSX.Element} icon - icon of the input
 * @param {string} mask - mask displayed within the input
 * @param {boolean} placeholderStatic - placeholder doesn't remain in the input field after entering text
 * @param {boolean} invalid - invalid input value
 * @param {boolean} readonly - user cannot enter data
 * @param {string} errorText - error text for invalid value
 */
function Input({
  value,
  placeholder,
  onChange,
  icon,
  mask,
  placeholderStatic,
  invalid,
  errorText,
  readonly,
}) {
  return (
    <div
      className={`input
      ${placeholderStatic ? 'input_static' : ''}
      ${invalid ? 'input_invalid' : ''}
      ${value ? 'input_filled' : ''}
      ${readonly ? 'input_readonly' : ''}`}
    >
      <div className="input__container">
        <InputMask
          mask={mask}
          readOnly={readonly}
          type="text"
          className="input__text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={(e) => {
            if (readonly) {
              e.target.blur();
            }
          }}
        />
        <div className="input__placeholder">{placeholder}</div>
        <div className="input__icon">{icon}</div>
        <div
          role="button"
          aria-label="Стереть текст"
          className="input__delete-icon"
          onMouseDown={() => {
            onChange('');
          }}
          onTouchStart={() => {
            onChange('');
          }}
        >
          <CloseIcon width="16px" height="16px" />
        </div>
        <div className="input__success-icon">
          <SuccessfullIcon width="16px" height="16px" />
        </div>
        <div className="input__error-text">{errorText}</div>
      </div>
    </div>
  );
}

Input.defaultProps = {
  placeholder: 'placeholder',
  invalid: false,
};

export default Input;
