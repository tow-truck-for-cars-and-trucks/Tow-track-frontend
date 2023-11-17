import './addresses.scss';
import React, { useState } from 'react';
import Input from '../../shared/ui/input/input';
import NavigationArrowIcon from '../../shared/ui/icons/navigation-arrow-icon';

function Addresses() {
	const [isValue, setIsValue] = useState('');

	return (
		<section className="addresses">
			<h2 className="Addresses__title">Адреса</h2>
			<div className="Addresses__input">
				<Input
					errorText=""
					placeholder="Откуда забрать"
					icon={<NavigationArrowIcon width="16px" height="16px" />}
					value={isValue}
					onChange={(value) => setIsValue(value)}
				/>
				<Input
					placeholder="Куда доставить"
					icon={<NavigationArrowIcon width="16px" height="16px" />}
					value={isValue}
					onChange={(value) => setIsValue(value)}
				/>
			</div>
		</section>
	);
}
export default Addresses;
