import './button.scss';

/**
 * @param {string} label - title of the button
 * @param {boolean} primary - flag indicating the style of the button
 * @param {boolean} disabled - flag indicating that the button is disabled for clicking
 * @param {function} onClick - callback called by pressing a button
 */
function Button({ primary, label, onClick, disabled, id }) {
  const mode = primary ? 'button__primary' : 'button__secondary';
  return (
    <button
      type="button"
      className={['button', mode].join(' ')}
      disabled={disabled}
      onClick={onClick}
      data-testid={id}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  primary: false,
  onClick: undefined,
};

export default Button;
