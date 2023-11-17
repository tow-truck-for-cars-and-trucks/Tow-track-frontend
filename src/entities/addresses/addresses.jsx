import './addresses.scss';
import Input from '../../shared/ui/input/input';
import NavigationArrowIcon from '../../shared/ui/icons/navigation-arrow-icon';

function Addresses() {
	return (
		<section className="addresses">
			<h2 className="Addresses__title">Адреса</h2>
			<div className="Addresses__input">
				<Input
					errorText=""
					placeholder="Откуда забрать"
					icon={<NavigationArrowIcon width="16px" height="16px" />}
				/>
				<Input
					placeholder="Куда доставить"
					icon={<NavigationArrowIcon width="16px" height="16px" />}
				/>
			</div>
		</section>
	);
}
export default Addresses;
