import './order-success.scss';
import DeliveryTime from '../../../shared/ui/delivery-time/delivery-time';
import ProgressBar from '../../../shared/ui/progress-bar/progress-bar';
import Adress from '../../../shared/ui/adress/adress';
import Accordion from '../../../shared/ui/accordion/accordion';
import OrderDetails from '../../../shared/ui/order-details/order-details';
import Alert from '../../../shared/ui/alert/alert';
import Button from '../../../shared/ui/button/button';

function OrderSuccess() {
  return (
    <section className="order-success">
      <div className="order-success__time">
        <DeliveryTime time="16:45" />
      </div>
      <ProgressBar />
      <div className="order-success__adress">
        <Adress
          adressFrom="Москва, ул. Ленинградская, 28"
          adressTo="​Московская область, г. Сергиев Посад, Сергиевская улица, 10"
        />
      </div>
      <div className="order-success__price">
        <p className="order-success__price-title">Стоимость заказа</p>
        <p className="order-success__price-total">1820 ₽</p>
      </div>
      <Accordion title="Информация о машине и водителе" withBorder={false}>
        <OrderDetails
          pricing="Эконом"
          carType="Легковой автомобиль"
          wheelLock="0"
          cuvetteWork="Нет"
          deferredOrder="Нет"
          comment="Еще один очень важный комментарий"
        />
      </Accordion>
      <div className="order-success__alert">
        <Alert />
      </div>
      <div className="order-success__button">
        <Button primary="true" label="Связаться с водителем" />
      </div>
      <Button secondary="true" label="Отменить заказ" />
    </section>
  );
}

export default OrderSuccess;
