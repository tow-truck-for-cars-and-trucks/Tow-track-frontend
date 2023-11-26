import './checkbox-radio.scss';

function CheckboxRadio({ value, type, onChange, name, title, id, subtitle }) {
  return (
    <label className="checkbox-radio" htmlFor={id}>
      <span className="checkbox-radio__span">{title}</span>
      <input
        id={id}
        className="checkbox-radio__input"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      <span className="checkbox-radio__fake">{subtitle}</span>
    </label>
  );
}

export default CheckboxRadio;
