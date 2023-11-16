import './chip.scss';

/**
 * @param {string} label - title of the chip
 * @param {string} disabled - flag indicating that the button is disabled for clicking
 * @param {boolean} isActive - selected chip
 */
function Chip({ label, isActive, disabled }) {
  return (
    <button
      type="button"
      disabled={disabled}
      className={`chip ${isActive ? 'chip_active' : ''}`}
    >
      {label}
    </button>
  );
}

Chip.defaultProps = {
  primary: false,
};

export default Chip;
