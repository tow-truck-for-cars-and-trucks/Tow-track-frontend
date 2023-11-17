import './buttonCounter.scss';

// import MinusDarkIcon from '../icons/minus-dark-icon';
// import MinusIcon from '../icons/minus-icon';
// import PlusDarkIcon from '../icons/plus-dark-icon';
// import PlusIcon from '../icons/plus-icon';

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
