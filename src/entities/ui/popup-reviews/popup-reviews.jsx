import './popup-reviews.scss';
import React, { useState } from 'react';
import Popup from '../../../shared/ui/popup/popup';
import Checkbox from '../../../shared/ui/checkbox/checkbox';
import Button from '../../../shared/ui/button/button';
import Comment from '../../../shared/ui/comment/comment';
import ButtonStar from '../../../shared/ui/button-star/button-star';

function PopupReviews({ isOpen, onClose, name, onSubmit }) {
  const [value, setValue] = useState('');
  const [isButtonValue, setIsButtonValue] = useState('');
  /*   const [isDriverOnTime, setIsDriverOnTime] = useState(false);
  const [isAdditionalQuestion, setIsAdditionalQuestion] = useState(false);

  const handleCommentChange = (val) => {
    setValue(val);
  }; */

  return (
    <section className="popup-reviews">
      <Popup active={isOpen} setActive={onClose}>
        <form className="popup-reviews__form" name={name} onSubmit={onSubmit}>
          <h2 className="popup-reviews__title">Как все прошло?</h2>
          <div className="popup-reviews__stars">
            <ButtonStar width="36px" height="36px" color="#FFCC00" />
          </div>

          <Checkbox
            width="24px"
            height="24px"
            value={value}
            onChange={setValue}
            isRight
          >
            <span className="popup-reviews__text">
              {' '}
              Водитель приехал вовремя?
            </span>
          </Checkbox>
          <Checkbox
            width="24px"
            height="24px"
            value={isButtonValue}
            onChange={setIsButtonValue}
            isRight
          >
            <span className="popup-reviews__text">
              {' '}
              Что еще можно спросить?
            </span>
          </Checkbox>

          <h3 className="popup-reviews__subtitle"> Комментарий</h3>
          <Comment placeholder="Вы можете оставить отзыв" />
          <Button label="Оставить отзыв" primary onClick={onClose} />
        </form>
      </Popup>
    </section>
  );
}
export default PopupReviews;
