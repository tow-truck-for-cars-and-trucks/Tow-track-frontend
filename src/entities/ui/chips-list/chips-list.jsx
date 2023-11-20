import { useCallback } from 'react';
import Chip from '../../../shared/ui/chip/chip';

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
