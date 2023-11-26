import Dropdown from '../../shared/ui/dropdown/dropdown';

function HourDropdown({ value, onChange }) {
  return (
    <Dropdown
      value={value}
      onChange={() => onChange()}
      options={Array(24)
        .fill()
        .map((_value, index) => ({
          id: index,
          label: index.toString().padStart(2, '0'),
        }))}
    />
  );
}

export default HourDropdown;
