import './checkbox.scss';
import CheckboxIcon from '../icons/checkbox-icon';
import CheckboxCheckedIcon from '../icons/checkbox-checked-icon';

/**
 * @param {string} width - width of icon
 * @param {string} height - height of icon
 * @param {boolean} value - checked/not checked
 * @param {JSX element} children -embedded component
 * @param {boolean} isRight - the text from the checkbox is located on the left or right
 * @param {function} onChange: (event) => void - fired with the new event of the input each time it changes
 */
function Checkbox({ children, onChange, value, width, height, isRight }) {
  return (
    <label
      className={`checkbox ${isRight ? 'checkbox_right' : ''}`}
      htmlFor="checkbox"
    >
      <input
        className="checkbox__input"
        type="checkbox"
        name="checkbox"
        value={value}
        // checked={value}
      />
      <button
        type="button"
        className="checkbox__icons"
        aria-label="Чекбокс"
        tabIndex="0"
        onClick={() => onChange(!value)}
      >
        {value ? (
          <CheckboxCheckedIcon width={width} height={height} />
        ) : (
          <CheckboxIcon width={width} height={height} />
        )}
      </button>
      {children}
    </label>
  );
}

export default Checkbox;
