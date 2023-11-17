import './buttonCounter.scss';

function ButtonCounter({ onClick, icon, disabled }) {
  return (
    <button
      className="counter__btn"
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
}
export default ButtonCounter;
