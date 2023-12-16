import { useState } from 'react';
import './password-input.scss';
import EyeIcon from '../icons/eye-icon';
import EyeSlashIcon from '../icons/eye-slash-icon';
import CloseIcon from '../icons/close-icon';

/**
 * @param {string} value - value displayed within the input
 * @param {string} placeholder - placeholder of the input
 * @param {function} onChange: (e: string) => void - fired with the new value of the input each time it changes
 * @param {boolean} invalid - invalid input value
 * @param {string} id - identificator for the input
 * @param {string} errorText - error text for invalid value
 */
function PasswordInput({ value, placeholder, onChange, invalid, id }) {
  const [showInput, setShowInput] = useState(false);

  return (
    <div
      className={`password-input
      ${invalid ? 'password-input_invalid' : ''}
      ${value ? 'password-input_filled' : ''}`}
    >
      <div className="password-input__container">
        <input
          type={showInput ? 'text' : 'password'}
          name={id}
          className="password-input__text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <label htmlFor={id} className="password-input__placeholder">
          {placeholder}
        </label>
        <button
          type="button"
          tabIndex={0}
          aria-label="Стереть текст"
          className="password-input__button password-input__button_delete-icon"
          onMouseDown={() => {
            onChange('');
          }}
        >
          <CloseIcon width="16px" height="16px" />
        </button>
        <div
          role="button"
          tabIndex={0}
          aria-label="Показать пароль"
          className="password-input__eye-icons"
          onMouseDown={() => {
            setShowInput(!showInput);
          }}
        >
          {showInput ? (
            <div className="password-input__eye-icon">
              <EyeIcon width="16px" height="16px" />
            </div>
          ) : (
            <div className="password-input__eye-icon">
              <EyeSlashIcon width="16px" height="16px" />
            </div>
          )}
        </div>
        {invalid ? (
          <p className="password-input__error-text">{invalid}</p>
        ) : null}
      </div>
    </div>
  );
}

PasswordInput.defaultProps = {
  placeholder: 'placeholder',
  invalid: false,
};

export default PasswordInput;
