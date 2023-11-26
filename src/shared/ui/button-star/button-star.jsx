import './button-start.scss';
import { useState } from 'react';
import StarIconDisabled from '../icons/star-icon-disabled';
import StarFillIcon from '../icons/star-fill-icon';

export default function ButtonStar({ width, height, color }) {
  // const [isButton, setIsButton] = useState(false);
  const [startStates, setStartStates] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleStartClick = (index) => {
    const newStartStates = startStates.map((state, i) => i <= index);
    setStartStates(newStartStates);
  };
  return (
    <div className="button-start">
      {startStates.map((isFilled, index) => (
        <button
          // key={index}
          className="button-start__btn"
          type="button"
          onClick={() => handleStartClick(index)}
        >
          {isFilled ? (
            <StarFillIcon width={width} height={height} color={color} />
          ) : (
            <StarIconDisabled width={width} height={height} />
          )}
        </button>
      ))}
    </div>
  );
}
