import { format } from 'date-fns';
import './delivery-time.scss';

/**
 * @param {string} time - time of the delivery
 */
function DeliveryTime({ time }) {
  const hours = format(new Date(time), 'HH');
  const minutes = format(new Date(time), 'mm');
  return (
    <div className="delivery-time">
      <p className="delivery-time__description">
        Примерное время подачи эвакуатора
      </p>
      <p className="delivery-time__description">{`${hours}:${minutes}`}</p>
    </div>
  );
}

export default DeliveryTime;
