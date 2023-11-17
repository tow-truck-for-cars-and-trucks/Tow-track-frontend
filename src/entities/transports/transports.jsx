import './transports.scss';
import React, { useState } from 'react';
import ButtonCounter from '../../shared/ui/button-counter/buttonCounter';
import MinusDarkIcon from '../../shared/ui/icons/minus-dark-icon';
import MinusIcon from '../../shared/ui/icons/minus-icon';
import PlusDarkIcon from '../../shared/ui/icons/plus-dark-icon';
import PlusIcon from '../../shared/ui/icons/plus-icon';
import Description from '../../shared/ui/description/description';
import ButtonToggle from '../../shared/ui/button-toggle/buttonToggle';
import Chip from '../../shared/ui/chip/chip';
import Prising from '../../shared/ui/pricing/pricing';
import Comment from '../../shared/ui/comment/comment';

function Transports() {
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
		<section className="transports">
			<div className="transports__weight">
				<h2 className="transports__title">Что перевозим?</h2>
				<div className="transports__view">
					<Chip label="Легковой" />
					<Chip label="Грузовой" />
					<Chip label="Мото" />
					<Chip label="Спецтехника" />
				</div>
			</div>

			<div className="transports__counter">
				<Description title="Блокировка колес" subtitle="Не могут вращаться" />
				<div className="transports__count">
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
					<span className="transports__span">{count}</span>
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
			<div className="transports__ditch">
				<Description title="Кюветные работы" subtitle="Сложность доступа" />
				<div className="transports__toggle">
					<ButtonToggle />
				</div>
			</div>
			<div className="transports__weight">
				<h2 className="transports__title">Выберите тариф</h2>
				<div className="transports__view">
					<Prising description="Оптимальный" price="1500" title="Эконом" />
					<Prising description="Самый быстрый" price="1800" title="Экспресс" />
					<Prising description="Спецвариант" price="1800" title="Манипулятор" />
				</div>
			</div>
			<div className="transports__ditch">
				<Description
					title="Отложенный заказ"
					subtitle="Выберите день и время"
				/>
				<ButtonToggle />
			</div>
			<div className="transports__comment">
				<h2 className="transports__title">Дополнительно</h2>
				<Comment />
			</div>
		</section>
	);
}
export default Transports;
