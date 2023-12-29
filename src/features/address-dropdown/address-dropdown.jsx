import { useSelector } from 'react-redux';
import Dropdown from '../../shared/ui/dropdown/dropdown';

function AddressDropdown({ value, onChange, isActive, setIsActive }) {
  const addresses = useSelector((store) => store.addressHints.addresses);

  return (
    <Dropdown
      value={value}
      onChange={onChange}
      isActive={isActive}
      setIsActive={setIsActive}
      options={addresses.map((_value, index) => ({
        id: index,
        label: _value.text,
      }))}
      isCreateOrder
    />
  );
}

export default AddressDropdown;
