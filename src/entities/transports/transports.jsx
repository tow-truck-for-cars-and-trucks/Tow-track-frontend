import './transports.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonCounter from '../../shared/ui/button-counter/buttonCounter';
import MinusDarkIcon from '../../shared/ui/icons/minus-dark-icon';
import MinusIcon from '../../shared/ui/icons/minus-icon';
import PlusDarkIcon from '../../shared/ui/icons/plus-dark-icon';
import PlusIcon from '../../shared/ui/icons/plus-icon';
import Description from '../../shared/ui/description/description';
import ButtonToggle from '../../shared/ui/button-toggle/buttonToggle';
import PricingList from '../ui/pricing-list/pricing-list';
import ChipsList from '../ui/chips-list/chips-list';
import Comment from '../../shared/ui/comment/comment';
import TotalPrice from '../../shared/ui/total-price/total-price';

function Transports() {
  const [activeTab, setActiveTab] = useState('passenger-car');
  const [activePrice, setActivePrice] = useState('optimal');
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

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
          <ChipsList
            chips={[
              { label: 'Легковой', id: 'passenger-car' },
              { label: 'Грузовой', id: 'cargo' },
              { label: 'Мото', id: 'moto' },
              { label: 'Спецтехника', id: 'special-equipment' },
            ]}
            value={activeTab}
            onChange={(chips) => setActiveTab(chips)}
          />
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
          <PricingList
            pricings={[
              {
                title: 'Эконом',
                price: '1500',
                description: 'Оптимальный',
                id: 'optimal',
              },
              {
                title: 'Экспресс',
                price: '1800',
                description: 'Самый быстрый',
                id: 'express',
              },
              {
                title: 'Манипулятор',
                price: '1800',
                description: 'Спецвариант',
                id: 'manipulator',
              },
            ]}
            value={activePrice}
            onChange={(pricings) => setActivePrice(pricings)}
          />
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
        <TotalPrice
          onClick={() => navigate('/register', { replace: true })}
          total={1820}
        />
      </div>
    </div>
  );
}
export default Transports;
