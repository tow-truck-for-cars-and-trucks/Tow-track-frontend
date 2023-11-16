import './order-confirmation.scss';
import PagesTitle from '../../shared/ui/pages-title/pages-title';
import Input from '../../shared/ui/input/input';
import Chip from '../../shared/ui/chip/chip';
import OrderDetails from '../../shared/ui/order-details/order-details';
import BackButton from '../../shared/ui/back-button/back-button';
import TotalPrice from '../../shared/ui/total-price/total-price';

function OrderConfirmation() {
	return (
		<main className="order-confirmation">
			<div className="order-confirmation__back-button">
				<BackButton />
			</div>
			<PagesTitle title="Подтверждение заказа" />
			<form className="order-confirmation__form">
				<div className="order-confirmation__adress">
					<Input
						placeholder="Откуда забрать"
						readonly="true"
						value="Москва, ул. Ленинградская, 28"
					/>
				</div>
				<div className="order-confirmation__adress">
					<Input
						placeholder="Куда доставить"
						readonly="true"
						value="Москва, ул. Ленинградская, 28"
					/>
				</div>
			</form>
			<div className="order-confirmation__submission-time">
				<p className="order-confirmation__description">
					Примерное&nbsp;время&nbsp;подачи эвакуатора
				</p>
				<p className="order-confirmation__description">16:45</p>
			</div>
			<div className="order-confirmation__payment">
				<h2 className="order-confirmation__payment-title">Способ оплаты</h2>
				<div className="order-confirmation__payment-container">
					<Chip label="Наличные" isActive="true" />
					<Chip label="Перевод по СБП" disabled="true" />
				</div>
			</div>
			<div className="order-confirmation__info">
				<OrderDetails
					pricing="Эконом"
					carType="Легковой автомобиль"
					wheelLock="0"
					cuvetteWork="Нет"
					deferredOrder="Нет"
				/>
			</div>
			<div className="order-confirmation__price">
				<TotalPrice total="1820" />
			</div>
		</main>
	);
}

export default OrderConfirmation;
