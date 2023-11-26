import Dropdown from '../../shared/ui/dropdown/dropdown';

function MinuteDropdown({ value, onChange }) {
  return (
    <Dropdown
      value={value}
      onChange={onChange}
      options={Array(6)
        .fill()
        .map((_value, index) => ({
          id: index * 10,
          label: index.toString().padEnd(2, '0'),
        }))}
    />
  );
}

export default MinuteDropdown;
