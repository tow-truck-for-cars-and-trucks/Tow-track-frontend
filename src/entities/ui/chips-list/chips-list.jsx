import { useCallback } from 'react';
import Chip from '../../../shared/ui/chip/chip';

/**
 * @param {Array} chips - Chip component array
 * @param {function} onActivate - callback-function
 * @param {string} value - value of the Chip component
 * @param {function} onChange - (e: string) => void - tracks id changes
 */
function ChipsList({ chips, onActivate, value, onChange }) {
  const onChipActivation = useCallback(
    (id) => {
      onChange(id);
    },
    [onActivate]
  );

  return (
    <>
      {chips.map((chip) => (
        <Chip
          key={Math.random()}
          label={chip.label}
          disabled={chip.disabled}
          isActive={value === chip.id}
          setActive={() => onChipActivation(chip.id)}
        />
      ))}
    </>
  );
}

export default ChipsList;
