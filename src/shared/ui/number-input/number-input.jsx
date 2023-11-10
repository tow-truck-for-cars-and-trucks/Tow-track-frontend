import './number-input.scss';
import InputMask from 'react-input-mask';

function NumberInput({ value, errorMessage, placeholder, mask }) {
	return (
		<InputMask
			mask={mask}
			placeholder={placeholder}
			className={`number-input
      ${errorMessage ? 'number-input_error' : ''}
      ${value ? 'number-input_filled' : ''}
      `}
			value={value}
			onChange={() => {}}
		/>
	);
}

NumberInput.defaultProps = {
	placeholder: 'placeholder',
};

export default NumberInput;
