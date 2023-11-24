import './popup-reviews.scss';
import React, { useState } from 'react';
import Popup from '../../../shared/ui/popup/popup';
import StarIconDisabled from '../../../shared/ui/icons/star-icon-disabled';
import Checkbox from '../../../shared/ui/checkbox/checkbox';
// import Input from '../../../shared/ui/input/input';
import Button from '../../../shared/ui/button/button';
import Comment from '../../../shared/ui/comment/comment';

function PopupReviews({ isOpen, onClose, name, onSubmit }) {
  const [value, setValue] = useState('');
  const [isButtonValue, setIsButtonValue] = useState('');
  return (
    <section className="popup-reviews">
      <Popup active={isOpen} setActive={onClose}>
        <h2 className="popup-reviews__title">Как все прошло?</h2>
        <div className="popup-reviews__stars">
          <StarIconDisabled width="36px" height="36px" />
          <StarIconDisabled width="36px" height="36px" />
          <StarIconDisabled width="36px" height="36px" />
          <StarIconDisabled width="36px" height="36px" />
          <StarIconDisabled width="36px" height="36px" />
        </div>

        <Checkbox
          width="24px"
          height="24px"
          value={value}
          onChange={(val) => setValue(val)}
          isRight={true / false}
        >
          <p className="popup-reviews__text"> Водитель приехал вовремя?</p>
        </Checkbox>
        <Checkbox
          width="24px"
          height="24px"
          value={isButtonValue}
          onChange={(val) => setIsButtonValue(val)}
          isRight={true / false}
        >
          <p className="popup-reviews__text"> Что еще можно спросить?</p>
        </Checkbox>

        <form className="popup-reviews__form" name={name} onSubmit={onSubmit}>
          <h3 className="popup-reviews__subtitle"> Комментарий</h3>
          <Comment placeholder="Вы можете оставить отзыв" />
          <Button label="Оставить отзыв" primary="true" />
        </form>
      </Popup>
    </section>
  );
}
export default PopupReviews;
