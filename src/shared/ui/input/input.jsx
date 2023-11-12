/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './input.scss';
import InputMask from 'react-input-mask';
import CloseIcon from '../icons/close-icon';
import SuccessfullIcon from '../icons/successfull-icon';

function Input({
	value,
	placeholder,
	onChange,
	icon,
	mask,
	placeholderStatic,
	invalid,
	errorText,
}) {
	return (
		<div
			className={`input
      ${placeholderStatic ? 'input_static' : ''}
      ${invalid ? 'input_invalid' : ''}
      ${value ? 'input_filled' : ''}`}
		>
			<div className="input__container">
				<InputMask
					mask={mask}
					type="text"
					className="input__text"
					value={value}
					onChange={(e) => onChange(e.target.value)}
				/>
				<div className="input__placeholder">{placeholder}</div>
				<div className="input__icon">{icon}</div>
				<div
					role="button"
					aria-label="Delete text"
					className="input__delete-icon"
					onMouseDown={(e) => {
						e.stopPropagation();
						onChange('');
					}}
				>
					<CloseIcon width="16px" height="16px" />
				</div>
				<div className="input__success-icon">
					<SuccessfullIcon width="16px" height="16px" />
				</div>
				<div className="input__error-text">{errorText}</div>
			</div>
		</div>
	);
}

Input.defaultProps = {
	placeholder: 'placeholder',
	invalid: false,
};

export default Input;
