import './popup-deferred-order.scss';
import { useCallback, useState } from 'react';
import {
  startOfDay,
  getMinutes,
  getHours,
  set,
  getYear,
  getMonth,
  getDate,
  add,
} from 'date-fns';
import CloseIcon from '../../shared/ui/icons/close-icon';
import Button from '../../shared/ui/button/button';
import MinuteDropdown from '../minute-dropdown/minute-dropdown';
import HourDropdown from '../hour-dropdown/hour-dropdown';
import MonthDropdown from '../month-dropdown/month-dropdown';

function PopupDeferredOrder({ isOpen, onClose, onSave }) {
  const getNextTenMinutes = () =>
    (Math.ceil(getMinutes(new Date()) / 10) % 6) * 10;

  const minPossibleDate = set(add(new Date(), { hours: 2 }), {
    minutes: getNextTenMinutes(),
    seconds: 0,
    milliseconds: 0,
  });

  const [selectedDate, setSelectedDate] = useState(minPossibleDate);

  const isCurrentDate = useCallback((date) => {
    const currentDate = new Date();

    return (
      date.getYear() === currentDate.getYear() &&
      date.getMonth() === currentDate.getMonth() &&
      date.getDate() === currentDate.getDate()
    );
  }, []);

  const isMinHour = useCallback(
    (date) =>
      isCurrentDate(date) && date.getHours() === minPossibleDate.getHours(),
    []
  );
  return (
    <div className={`popup-deferred ${isOpen ? 'popup-deferred_active' : ''}`}>
      <div className="popup-deferred__content">
        <button
          className="popup-deferred__close"
          type="button"
          aria-label="кнопка закрытия модального окна"
          onClick={onClose}
        >
          <CloseIcon width="16px" height="16px" />
        </button>
        <h1 className="popup-deferred__title">Отложенный заказ</h1>
        <p className="popup-deferred__text">
          Отложенный заказ можно сделать не ранее чем за 2 часа и не позднее 3
          дней, начиная с текущей даты
        </p>
        {selectedDate.toISOString()}
        <div className="popup-deferred__form" name="deferred-order">
          <div className="popup-deferred__box">
            <h2 className="popup-deferred__subtitle">Дата</h2>
            <MonthDropdown
              value={startOfDay(selectedDate)}
              onChange={({ id: newDate }) => {
                setSelectedDate(
                  set(selectedDate, {
                    year: getYear(newDate),
                    month: getMonth(newDate),
                    date: getDate(newDate),
                  })
                );
              }}
            />
          </div>
          <div className="popup-deferred__times">
            <h2 className="popup-deferred__subtitle">Время</h2>
            <div className="popup-deferred__box-time">
              <HourDropdown
                value={getHours(selectedDate)}
                startHour={
                  isCurrentDate(selectedDate) ? minPossibleDate.getHours() : 0
                }
                onChange={({ id: hours }) =>
                  setSelectedDate(set(selectedDate, { hours }))
                }
              />
              <p className="popup-deferred__colon">:</p>
              <MinuteDropdown
                value={getMinutes(selectedDate)}
                startMinute={isMinHour(selectedDate) ? getNextTenMinutes() : 0}
                onChange={({ id: minutes }) =>
                  setSelectedDate(set(selectedDate, { minutes }))
                }
              />
            </div>
          </div>
          <Button
            label="Сохранить"
            primary
            onClick={() => onSave(selectedDate)}
          />
        </div>
      </div>
    </div>
  );
}
export default PopupDeferredOrder;
