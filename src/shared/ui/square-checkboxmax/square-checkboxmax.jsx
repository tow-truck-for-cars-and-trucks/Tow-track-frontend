import './square-checkboxmax.scss';

function SquareCheck({ id, title }) {
  return (
    <div className="square-checkbox">
      <input className="square-checkbox__input" type="checkbox" id={id} />
      <label className="square-checkbox__label" htmlFor={id}>
        <p className="square-checkbox__title">{title}</p>
      </label>
    </div>
  );
}
export default SquareCheck;
