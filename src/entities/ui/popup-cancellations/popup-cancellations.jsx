import './popup-cancellations.scss';
import React, { useState } from 'react';
import Popup from '../../../shared/ui/popup/popup';
import RadioButton from '../../../shared/ui/radio-button/radio-button';
import Comment from '../../../shared/ui/comment/comment';
import Button from '../../../shared/ui/button/button';

function PopupCancellations({ isOpen, onClose /* , cancelOrder */ }) {
  const [isValueError, setIsValueError] = useState('');
  const [isValueNotSuit, setIsValueSuit] = useState('');
  const [isValueLong, setIsValueLong] = useState('');
  const [isValueCancell, setIsValueCancell] = useState('');
  const [isValueFast, setIsValueFast] = useState('');
  const [isValueNotNeed, setIsValueNotNeed] = useState(false);
  const [isValue, setIsValue] = useState(false);

  return (
    <div className="popup-cancellations">
      <Popup active={isOpen} setActive={onClose}>
        <h1 className="popup-cancellations__title">Заказ отменен!</h1>
        <h2 className="popup-cancellations__subtitle">Что пошло не так?</h2>
        <div className="popup-cancellations__container">
          <RadioButton
            name="radio"
            value={isValueError}
            onChange={(val) => setIsValueError(val)}
            type="radio"
            title="Заказал по ошибке"
          />
          <RadioButton
            name="radio"
            value={isValueCancell}
            onChange={(val) => setIsValueCancell(val)}
            type="radio"
            title="Отменил по просьбе водителя"
          />
          <RadioButton
            name="radio"
            value={isValueNotSuit}
            onChange={(val) => setIsValueSuit(val)}
            type="radio"
            title="Не устроил эвакуатор"
          />
          <RadioButton
            name="radio"
            value={isValueLong}
            onChange={(val) => setIsValueLong(val)}
            type="radio"
            title="Слишком долго жду эвакуатор"
          />
          <RadioButton
            id="fast"
            name="radio"
            value={isValueFast}
            onChange={(val) => setIsValueFast(val)}
            type="radio"
            title="Конкурент приехал быстрее"
          />
          <RadioButton
            id="need"
            name="radio"
            value={isValueNotNeed}
            onChange={(e) => setIsValueNotNeed(e)}
            type="radio"
            title="Авто больше не нуждается в эвакуации"
          />

          <RadioButton
            id="other"
            name="radio"
            value={isValue}
            onChange={(e) => setIsValue(e)}
            type="radio"
            title="Другое"
          />

          {isValue && <Comment placeholder="Опишите, что случилось" />}
        </div>
        <Button label="Применить" primary onClick={onClose} />
      </Popup>
    </div>
  );
}
export default PopupCancellations;
