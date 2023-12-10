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
import Button from '../../shared/ui/button/button';
import MinuteDropdown from '../minute-dropdown/minute-dropdown';
import HourDropdown from '../hour-dropdown/hour-dropdown';
import MonthDropdown from '../month-dropdown/month-dropdown';
import Popup from '../../shared/ui/popup/popup';

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

  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <Popup active={isOpen} setActive={onClose} contentBottom>
      <div
        role="button"
        tabIndex={0}
        onMouseDown={() => setActiveDropdown(null)}
      >
        <h1 className="popup-deferred__title">Отложенный заказ</h1>
        <p className="popup-deferred__text">
          Отложенный заказ можно сделать не ранее чем за 2 часа и не позднее 3
          дней, начиная с текущей даты
        </p>
        <div className="popup-deferred__form" name="deferred-order">
          <div className="popup-deferred__box">
            <h2 className="popup-deferred__subtitle">Дата</h2>
            <MonthDropdown
              value={startOfDay(selectedDate)}
              isActive={activeDropdown === 'month'}
              setIsActive={(isActive) =>
                setActiveDropdown(isActive ? 'month' : null)
              }
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
                isActive={activeDropdown === 'hour'}
                setIsActive={(isActive) =>
                  setActiveDropdown(isActive ? 'hour' : null)
                }
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
                isActive={activeDropdown === 'minute'}
                setIsActive={(isActive) =>
                  setActiveDropdown(isActive ? 'minute' : null)
                }
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
    </Popup>
  );
}
export default PopupDeferredOrder;
