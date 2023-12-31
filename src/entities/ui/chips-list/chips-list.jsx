import { useCallback } from 'react';
import './chips-list.scss';
import Chip from '../../../shared/ui/chip/chip';

/**
 * @param {Array} chips - Chip component array
 * @param {string} value - value of the Chip component
 * @param {function} onChange - (e: string) => void - tracks id changes (callback-function)
 */
function ChipsList({ chips, value, onChange }) {
  const onChipActivation = useCallback(
    (id) => {
      onChange(id);
    },
    [onChange]
  );

  return (
    <div className="chips-list" data-testid="chip-list">
      {chips.map((chip) => (
        <Chip
          key={chip.id}
          label={chip.label}
          disabled={chip.disabled}
          isActive={value === chip.id}
          setActive={() => onChipActivation(chip.id)}
        />
      ))}
    </div>
  );
}

export default ChipsList;
