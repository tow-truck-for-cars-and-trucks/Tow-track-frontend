import './popup-cancellations.scss';
import React, { useState } from 'react';
import Popup from '../../../shared/ui/popup/popup';
import CheckboxRadio from '../../../shared/ui/checkbox-radio/checkbox-radio';
import Comment from '../../../shared/ui/comment/comment';
import Button from '../../../shared/ui/button/button';

function PopupCancellations({ isOpen, onClose, cancelOrder }) {
  const [isValueError, setIsValueError] = useState('');
  const [isValueNotSuit, setIsValueSuit] = useState('');
  const [isValueLong, setIsValueLong] = useState('');
  const [isValueCancell, setIsValueCancell] = useState('');
  const [isValueFast, setIsValueFast] = useState('');
  const [isValueNotNeed, setIsValueNotNeed] = useState('');
  const [isValueOther, setIsValueOther] = useState('');
  return (
    <div className="popup-cancellations">
      <Popup active={isOpen} setActive={onClose}>
        <h1 className="popup-cancellations__title">Заказ отменен!</h1>
        <h2 className="popup-cancellations__subtitle">Что пошло не так?</h2>
        <div className="popup-cancellations__container">
          <CheckboxRadio
            name="error"
            width="24px"
            height="24px"
            value={isValueError}
            onChange={(val) => setIsValueError(val)}
          >
            <p className="popup-cancellations__text"> Заказал по ошибке</p>
          </CheckboxRadio>
          <CheckboxRadio
            name="cancel"
            width="24px"
            height="24px"
            value={isValueCancell}
            onChange={(val) => setIsValueCancell(val)}
          >
            <p className="popup-cancellations__text">
              {' '}
              Отменил по просьбе водителя
            </p>
          </CheckboxRadio>
          <CheckboxRadio
            name="not-suit"
            width="24px"
            height="24px"
            value={isValueNotSuit}
            onChange={(val) => setIsValueSuit(val)}
          >
            <p className="popup-cancellations__text"> Не устроил эвакуатор</p>
          </CheckboxRadio>
          <CheckboxRadio
            name="long"
            width="24px"
            height="24px"
            value={isValueLong}
            onChange={(val) => setIsValueLong(val)}
          >
            <p className="popup-cancellations__text">
              {' '}
              Слишком долго жду эвакуатор
            </p>
          </CheckboxRadio>
          <CheckboxRadio
            name="fast"
            width="24px"
            height="24px"
            value={isValueFast}
            onChange={(val) => setIsValueFast(val)}
          >
            <p className="popup-cancellations__text">
              {' '}
              Конкурент приехал быстрее
            </p>
          </CheckboxRadio>
          <CheckboxRadio
            name="not-need"
            width="24px"
            height="24px"
            value={isValueNotNeed}
            onChange={(val) => setIsValueNotNeed(val)}
          >
            <p className="popup-cancellations__text">
              Авто больше не нуждается в эвакуации
            </p>
          </CheckboxRadio>
          <CheckboxRadio
            name="other"
            width="24px"
            height="24px"
            value={isValueOther}
            onChange={(val) => setIsValueOther(val)}
          >
            <p className="popup-cancellations__text"> Другое</p>
          </CheckboxRadio>
          {isValueOther && <Comment placeholder="Опишите, что случилось" />}
          <Button label="Применить" primary onClick={cancelOrder} />
        </div>
      </Popup>
    </div>
  );
}
export default PopupCancellations;
