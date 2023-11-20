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
import TotalPrice from '../../shared/ui/total-price/total-price';
import Button from '../../shared/ui/button/button';
import PopupReviews from '../ui/popup-reviews/popup-reviews';

function Transports() {
  const [count, setCount] = useState(0);
  const [isActiveRewies, setIsActiveRewies] = useState(false);
  const closeAllPopups = () => {
    setIsActiveRewies(false);
  };

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
    <div className="transports">
      <div className="transports__weight">
        <h2 className="transports__title">Что перевозим?</h2>
        <div className="transports__views">
          <div className="transports__card">
            <Chip label="Легковой" />
          </div>
          <div className="transports__card">
            <Chip label="Грузовой" />
          </div>
          <div className="transports__card">
            <Chip label="Мото" />
          </div>
          <div className="transports__card">
            <Chip label="Спецтехника" />
          </div>
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
          <ButtonToggle id="toggle" />
        </div>
      </div>
      <div className="transports__weight">
        <h2 className="transports__title">Выберите тариф</h2>
        <div className="transports__views">
          <div className="transports__card">
            <Prising description="Оптимальный" price="1500" title="Эконом" />
          </div>
          <div className="transports__card">
            <Prising
              description="Самый быстрый"
              price="1800"
              title="Экспресс"
            />
          </div>
          <div className="transports__card">
            <Prising
              description="Спецвариант"
              price="1800"
              title="Манипулятор"
            />
          </div>
        </div>
      </div>
      <div className="transports__ditch">
        <Description
          title="Отложенный заказ"
          subtitle="Выберите день и время"
        />
        <ButtonToggle id="checkbox" />
      </div>
      <div className="transports__comment">
        <h2 className="transports__title">Дополнительно</h2>
        <Comment />
      </div>
      <div className="transports__price">
        <TotalPrice total={1820} />
      </div>

      <Button label="Оставить отзыв" onClick={() => setIsActiveRewies(true)} />
      <PopupReviews isOpen={isActiveRewies} onClose={closeAllPopups} />
    </div>
  );
}
export default Transports;
