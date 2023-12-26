import './delivery-time.scss';
import { format } from 'date-fns';

/**
 * @param {string} time - time of the delivery
 */
function DeliveryTime({ date }) {
  return (
    <div className="delivery-time" data-testid="delivery-time">
      <p className="delivery-time__description">
        Примерное время подачи эвакуатора
      </p>
      <p className="delivery-time__description">
        {' '}
        {format(new Date(date), 'HH:mm')}
      </p>
    </div>
  );
}

export default DeliveryTime;
