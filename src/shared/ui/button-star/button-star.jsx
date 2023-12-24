import './button-star.scss';
import { useState } from 'react';
import StarEmptyIcon from '../icons/star-empty-icon';
import StarFillIcon from '../icons/star-fill-icon';

export default function ButtonStar({ value, onChange }) {
  const [stars] = useState([1, 2, 3, 4, 5]);

  return (
    <div className="button-star" data-testid="button-star">
      {stars.map((ratingValue) => (
        <button
          type="button"
          className="button-star__icon"
          onClick={() => onChange(ratingValue)}
          aria-label="рейтинг"
        >
          {ratingValue <= value ? (
            <StarFillIcon color="#FFCC00" width="36px" height="36px" />
          ) : (
            <StarEmptyIcon width="36px" height="36px" />
          )}
        </button>
      ))}
    </div>
  );
}
