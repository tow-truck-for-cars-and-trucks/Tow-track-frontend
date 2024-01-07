/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './profile-input.scss';
import InputMask from 'react-input-mask';
import CloseIcon from '../icons/close-icon';
// import SuccessfullIcon from '../icons/successfull-icon';
import EditIcon from '../icons/edit-icon';

/**
 * @param {string} value - value displayed within the input
 * @param {string} placeholder - placeholder of the input
 * @param {function} onChange: (e: string) => void - fired with the new value of the input each time it changes
 * @param {JSX.Element} icon - icon of the input
 * @param {string} mask - mask displayed within the input
 * @param {boolean} placeholderStatic - placeholder doesn't remain in the input field after entering text
 * @param {boolean} invalid - invalid input value
 * @param {boolean} readonly - user cannot enter data
 * @param {string} id - identificator for the input
 * @param {string} type - type of the input
 */
function ProfileInput({
  value,
  placeholder,
  onChange,
  icon,
  mask,
  placeholderStatic,
  invalid,
  readonly,
  password,
  id,
  type,
  onClick,
  autoComplete,
  inputСontainerRef,
}) {
  return (
    <div
      className={`input
      ${placeholderStatic ? 'input_static' : ''}
      ${invalid ? 'input_invalid' : ''}
      ${value ? 'input_filled' : ''}
      ${readonly ? 'input_readonly' : ''}
      ${password ? 'input_password' : ''}`}
    >
      <div className="input__container" ref={inputСontainerRef}>
        <InputMask
          mask={mask}
          name={id}
          data-testid={id}
          autoComplete={autoComplete}
          readOnly={readonly}
          type={type || 'text'}
          className="input__text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={(e) => {
            if (readonly) {
              e.target.blur();
            }
          }}
        />
        <label htmlFor={id} className="input__placeholder">
          {placeholder}
        </label>
        <button type="button" className="input__icon" onClick={onClick}>
          {icon}
        </button>
        <button
          type="button"
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
        </button>
        <div className="input__success-icon">
          <EditIcon width="16px" height="16px" />
        </div>
        {invalid ? <p className="input__error-text">{invalid}</p> : null}
      </div>
    </div>
  );
}

ProfileInput.defaultProps = {
  placeholder: 'placeholder',
  invalid: false,
};

export default ProfileInput;
