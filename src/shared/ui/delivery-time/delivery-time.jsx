import { format } from 'date-fns';
import './delivery-time.scss';

/**
 * @param {string} time - time of the delivery
 */
function DeliveryTime({ time }) {
  const arrival = format(new Date(time), 'HH:mm');
  return (
    <div className="delivery-time">
      <p className="delivery-time__description">
        Примерное время подачи эвакуатора
      </p>
      <p className="delivery-time__description">{`${arrival}`}</p>
    </div>
  );
}

export default DeliveryTime;
