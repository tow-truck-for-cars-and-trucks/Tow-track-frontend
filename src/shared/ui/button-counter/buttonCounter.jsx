import './buttonCounter.scss';
import React, { useState } from 'react';
import MinusDarkIcon from '../icons/minus-dark-icon';
import MinusIcon from '../icons/minus-icon';
import PlusDarkIcon from '../icons/plus-dark-icon';
import PlusIcon from '../icons/plus-icon';

function ButtonCounter() {
	const [count, setCount] = useState(0);
	function handleIncrement() {
		if (count < 4) {
			setCount(count + 1);
		}
	}

	function handleDecrement() {
		if (count > 0) {
			setCount(count - 1);
		}
	}

	return (
		<div className="buttonCounter">
			<button
				className="buttonCounter__btn"
				type="button"
				onClick={handleDecrement}
				disabled={count === 0}
				aria-label="минус"
			>
				{count > 0 ? (
					<MinusDarkIcon width="24px" height="24px" />
				) : (
					<MinusIcon width="24px" height="24px" />
				)}
			</button>
			<span className="buttonCounter__count">{count}</span>
			<button
				className="buttonCounter__btn"
				type="button"
				onClick={handleIncrement}
				disabled={count === 4}
				aria-label="плюс"
			>
				{count < 4 ? (
					<PlusDarkIcon width="24px" height="24px" />
				) : (
					<PlusIcon width="24px" height="24px" />
				)}
			</button>
		</div>
	);
}
export default ButtonCounter;
