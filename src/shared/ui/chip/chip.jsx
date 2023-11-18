import './chip.scss';
import { useState } from 'react';

/**
 * @param {string} label - title of the chip
 * @param {string} disabled - flag indicating that the button is disabled for clicking
 * @param {boolean} isActive - selected chip
 */
function Chip({ label, disabled }) {
  const [isActive, setActive] = useState(false);

  return (
    <button
      type="button"
      disabled={disabled}
      className={`chip ${isActive ? 'chip_active' : ''}`}
      onClick={() => setActive(!isActive)}
    >
      {label}
    </button>
  );
}

Chip.defaultProps = {
  primary: false,
};

export default Chip;
