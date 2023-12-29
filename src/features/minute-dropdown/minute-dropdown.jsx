import Dropdown from '../../shared/ui/dropdown/dropdown';

function MinuteDropdown({
  value,
  onChange,
  isActive,
  setIsActive,
  startMinute,
}) {
  return (
    <Dropdown
      value={value}
      onChange={onChange}
      isActive={isActive}
      setIsActive={setIsActive}
      options={Array(6 - Math.floor(startMinute / 10))
        .fill()
        .map((_value, index) => ({
          id: index * 10 + startMinute,
          label: (index * 10 + startMinute).toString().padEnd(2, '0'),
        }))}
      isDefferedOrder
    />
  );
}

MinuteDropdown.defaultProps = {
  startMinute: 0,
};

export default MinuteDropdown;
