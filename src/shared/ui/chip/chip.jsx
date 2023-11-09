import './chip.scss';

function Chip({ label, isActive, disabled }) {
	return (
		<button
			type="button"
			disabled={disabled}
			className={['chip', isActive ? 'chip_active' : ''].join(' ')}
		>
			{label}
		</button>
	);
}

Chip.defaultProps = {
	primary: false,
};

export default Chip;
