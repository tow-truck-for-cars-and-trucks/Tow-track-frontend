import './radio-button.scss';

function RadioButton({ value, onChange, name, title, id, subtitle }) {
  return (
    <label className="radio-button" htmlFor={id}>
      <span className="radio-button__span">{title}</span>
      <input
        id={id}
        data-testid={id}
        className="radio-button__input"
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className="radio-button__fake">{subtitle}</span>
    </label>
  );
}

export default RadioButton;
