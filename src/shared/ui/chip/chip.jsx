import './chip.scss';

/**
 * @param {string} label - title of the chip
 * @param {string} disabled - flag indicating that the button is disabled for clicking
 * @param {boolean} isActive - selected chip
 */
function Chip({ label, disabled, setActive, isActive }) {
  return (
    <button
      data-testid="chip"
      type="button"
      disabled={disabled}
      className={`chip ${isActive ? 'chip_active' : ''}`}
      onClick={() => setActive(true)}
    >
      {label}
    </button>
  );
}

Chip.defaultProps = {
  primary: false,
};

export default Chip;
