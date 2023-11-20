import './popup-reviews.scss';
// import React, { useState } from 'react';
import Popup from '../../../shared/ui/popup/popup';
import StarFillIcon from '../../../shared/ui/icons/star-fill-icon';
import SquareCheck from '../../../shared/ui/square-checkboxmax/square-checkboxmax';

function PopupReviews({ isOpen, onClose }) {
  return (
    <Popup active={isOpen} setActive={onClose}>
      <h2 className="popup-reviews__title">Как все прошло?</h2>
      <div className="popup-reviews__stars">
        <StarFillIcon width="36px" height="36px" color="#FFCC00" />
        <StarFillIcon width="36px" height="36px" color="#FFCC00" />
        <StarFillIcon width="36px" height="36px" color="#FFCC00" />
        <StarFillIcon width="36px" height="36px" color="#FFCC00" />
        <StarFillIcon width="36px" height="36px" color="#FFCC00" />
      </div>
      <SquareCheck title="Водитель приехал вовремя?" id="time" />
      {/* <SquareCheck title="Что еще можно спросить?" id="ask"  */}
    </Popup>
  );
}
export default PopupReviews;
