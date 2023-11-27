import { add, startOfDay, isEqual } from 'date-fns';
import dateToLabel from '../../shared/utils/date-to-label';
import Dropdown from '../../shared/ui/dropdown/dropdown';

function MonthDropdown({ value, onChange }) {
  const days = Array(4)
    .fill()
    .map((_value, index) => add(new Date(), { days: index }))
    .map((date) => ({
      label: dateToLabel(date),
      id: startOfDay(date),
    }));

  return (
    <Dropdown
      value={value}
      onChange={onChange}
      options={days}
      valueComparator={(option, innerValue) => isEqual(option.id, innerValue)}
    />
  );
}

export default MonthDropdown;
