import './button-start.scss';
// import { useState } from 'react';
import React, { useState } from 'react';
// import StarIconDisabled from '../icons/star-icon-disabled';
// import StarFillIcon from '../icons/star-fill-icon';
import { FaStar } from 'react-icons/fa';

export default function ButtonStar({ title }) {
  const [rating, setRating] = useState(null);

  return (
    <div className="button-start">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label htmlFor="rating">
            <input
              className="button-start__input"
              type="radio"
              name="rating"
              id="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className="button-start__star"
              color={ratingValue <= rating ? '#FFCC00' : '#BEBEBF'}
              size={36}
            />
            <span>{title}</span>
          </label>
        );
      })}
    </div>
  );
}
