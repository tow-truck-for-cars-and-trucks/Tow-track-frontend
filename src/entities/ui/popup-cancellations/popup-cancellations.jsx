import './popup-cancellations.scss';
import React, { useState } from 'react';
import Popup from '../../../shared/ui/popup/popup';
import RadioButton from '../../../shared/ui/radio-button/radio-button';
import Comment from '../../../shared/ui/comment/comment';
import Button from '../../../shared/ui/button/button';

function PopupCancellations({ isOpen, onClose, cancelOrder }) {
  const [isValueError, setIsValueError] = useState(false);
  const [isValueNotSuit, setIsValueSuit] = useState(false);
  const [isValueLong, setIsValueLong] = useState(false);
  const [isValueCancell, setIsValueCancell] = useState(false);
  const [isValueFast, setIsValueFast] = useState(false);
  const [isValueNotNeed, setIsValueNotNeed] = useState(false);
  const [isValueComment, setIsValueComment] = useState(false);

  const setIsValue = (evt, setValue) => {
    setValue(evt);
    if (isValueComment) {
      setIsValueComment(false);
    }
  };

  return (
    <div className="popup-cancellations">
      <Popup active={isOpen} setActive={onClose}>
        <h1 className="popup-cancellations__title">Заказ отменен!</h1>
        <h2 className="popup-cancellations__subtitle">Что пошло не так?</h2>
        <div className="popup-cancellations__container">
          <RadioButton
            id="error-radio"
            name="radio"
            value={isValueError}
            onChange={(evt) => setIsValue(evt, setIsValueError)}
            title="Заказал по ошибке"
          />
          <RadioButton
            id="cancell-radio"
            name="radio"
            value={isValueCancell}
            onChange={(evt) => setIsValue(evt, setIsValueCancell)}
            title="Отменил по просьбе водителя"
          />
          <RadioButton
            id="not-suit-radio"
            name="radio"
            value={isValueNotSuit}
            onChange={(evt) => setIsValue(evt, setIsValueSuit)}
            title="Не устроил эвакуатор"
          />
          <RadioButton
            id="long-radio"
            name="radio"
            value={isValueLong}
            onChange={(evt) => setIsValue(evt, setIsValueLong)}
            title="Слишком долго жду эвакуатор"
          />
          <RadioButton
            id="fast"
            name="radio"
            value={isValueFast}
            onChange={(evt) => setIsValue(evt, setIsValueFast)}
            title="Конкурент приехал быстрее"
          />
          <RadioButton
            id="need"
            name="radio"
            value={isValueNotNeed}
            onChange={(evt) => setIsValue(evt, setIsValueNotNeed)}
            title="Авто больше не нуждается в эвакуации"
          />

          <RadioButton
            id="other"
            name="radio"
            value={isValueComment}
            onChange={(e) => setIsValueComment(e)}
            title="Другое"
          />
          {isValueComment && <Comment placeholder="Опишите, что случилось" />}
        </div>
        <Button
          label="Применить"
          primary
          onClick={() => {
            cancelOrder();
            onClose();
          }}
        />
      </Popup>
    </div>
  );
}
export default PopupCancellations;
