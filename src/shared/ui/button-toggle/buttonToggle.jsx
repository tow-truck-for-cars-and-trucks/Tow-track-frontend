import './buttonToggle.scss';

function ButtonToggle({ id }) {
  return (
    <label className="buttonToggle__lab" htmlFor={id}>
      {/* <p className="filterCheckbox__title"></p> */}
      <input className="buttonToggle__input" type="checkbox" id={id} />
      <span className="buttonToggle__span" />
    </label>
  );
}
export default ButtonToggle;
