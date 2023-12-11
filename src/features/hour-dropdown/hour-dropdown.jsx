import Dropdown from '../../shared/ui/dropdown/dropdown';

function HourDropdown({ value, onChange, isActive, setIsActive, startHour }) {
  return (
    <Dropdown
      value={value}
      onChange={onChange}
      isActive={isActive}
      setIsActive={setIsActive}
      options={Array(24 - startHour)
        .fill()
        .map((_value, index) => ({
          id: index + startHour,
          label: (index + startHour).toString().padStart(2, '0'),
        }))}
    />
  );
}

HourDropdown.defaultProps = {
  startHour: 0,
};

export default HourDropdown;
