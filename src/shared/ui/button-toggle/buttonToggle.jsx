import './buttonToggle.scss';

/**
 * @param {boolean} value - toggle/not toggle
 * @param {string} id - identificator of the input
 * @param {string} title - title of the input
 * @param {function} onChange: (event) => void - fired with the new event of the input each time it changes
 */
function ButtonToggle({ id, title, value, onChange }) {
  return (
    <label className="button-toggle" htmlFor={id}>
      {title}
      <input
        className="button-toggle__input"
        type="checkbox"
        id={id}
        checked={value}
        onChange={() => onChange(!value)}
      />
      <span className="button-toggle__span" />
    </label>
  );
}
export default ButtonToggle;
