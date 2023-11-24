import './buttonToggle.scss';

function ButtonToggle({ id, children, onChange, checked }) {
  return (
    <label className="button-toggle__lab" htmlFor={id}>
      {children}
      <input
        className="button-toggle__input"
        type="checkbox"
        id={id}
        onChange={onChange}
        checked={checked}
      />
      <span className="button-toggle__span" />
    </label>
  );
}
export default ButtonToggle;
