import './buttonToggle.scss';

function ButtonToggle({ id, title }) {
  return (
    <label className="button-toggle__lab" htmlFor={id}>
      <p className="filterCheckbox__title">{title}</p>
      <input className="button-toggle__input" type="checkbox" id={id} />
      <span className="button-toggle__span" />
    </label>
  );
}
export default ButtonToggle;
