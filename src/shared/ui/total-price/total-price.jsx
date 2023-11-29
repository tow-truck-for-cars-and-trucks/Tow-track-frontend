import { useEffect, useState } from 'react';
import './total-price.scss';
import Button from '../button/button';

/**
 * @param {number} total - total price of the order
 * @param {boolean} isRegister - is the user logged in or not
 */

function TotalPrice({ total, onClick, isButtonActive, scrollOffset }) {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > scrollOffset) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollOffset]);

  return (
    <div className={`total-price ${isFixed ? 'fixed' : ''}`}>
      <div className="total-price__wrapper">
        <h2 className="total-price__title">Стоимость заказа:</h2>
        <h2 className="total-price__full-price"> {total} ₽</h2>
      </div>
      <Button
        primary
        label="Оформить заказ"
        onClick={() => onClick()}
        disabled={!isButtonActive}
      />
    </div>
  );
}

export default TotalPrice;
