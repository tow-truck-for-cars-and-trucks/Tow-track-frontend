import './counter.scss';
import React, { useState } from 'react';
import ButtonCounter from '../../shared/ui/button-counter/buttonCounter';
import MinusDarkIcon from '../../shared/ui/icons/minus-dark-icon';
import MinusIcon from '../../shared/ui/icons/minus-icon';
import PlusDarkIcon from '../../shared/ui/icons/plus-dark-icon';
import PlusIcon from '../../shared/ui/icons/plus-icon';
import Description from '../../shared/ui/description/description';
import ButtonToggle from '../../shared/ui/button-toggle/buttonToggle';

function HandleCounter() {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		if (count < 4) {
			setCount(count + 1);
		}
	};

	const handleDecrement = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	return (
		<>
			<div className="handleCounter">
				<Description title="Блокировка колес" subtitle="Не могут вращаться" />
				<div className="handleCounter__count">
					<ButtonCounter
						disabled={count === 0}
						onClick={handleDecrement}
						icon={
							count > 0 ? (
								<MinusDarkIcon width="24px" height="24px" />
							) : (
								<MinusIcon width="24px" height="24px" />
							)
						}
					/>
					<span className="handleCounter__span">{count}</span>
					<ButtonCounter
						disabled={count === 4}
						onClick={handleIncrement}
						icon={
							count < 4 ? (
								<PlusDarkIcon width="24px" height="24px" />
							) : (
								<PlusIcon width="24px" height="24px" />
							)
						}
					/>
				</div>
			</div>
			<div className="handleCounter">
				<Description title="Кювезные работы" subtitle="Сложность доступа" />
				<ButtonToggle />
			</div>
		</>
	);
}
export default HandleCounter;
