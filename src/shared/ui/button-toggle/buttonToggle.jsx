import './buttonToggle.scss';

function ButtonToggle({ id, children, onChange, value }) {
  return (
    <label className="button-toggle__lab" htmlFor={id}>
      {children}
      <input
        className="button-toggle__input"
        type="checkbox"
        id={id}
        onChange={(e) => onChange(e.target.checked)}
        checked={value}
      />
      <span className="button-toggle__span" />
    </label>
  );
}
export default ButtonToggle;
