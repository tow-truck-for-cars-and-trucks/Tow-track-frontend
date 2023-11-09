import './button.scss';

function Button({ primary, label, onClick, disabled }) {
	const mode = primary ? 'button__primary' : 'button__secondary';
	return (
		<button
			type="button"
			className={['button', mode].join(' ')}
			disabled={disabled}
			onClick={onClick}
		>
			{label}
		</button>
	);
}

Button.defaultProps = {
	primary: false,
	onClick: undefined,
};

export default Button;
