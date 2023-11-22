import './addresses.scss';
import React, { useState } from 'react';
import Input from '../../shared/ui/input/input';
import NavigationArrowIcon from '../../shared/ui/icons/navigation-arrow-icon';

function Addresses() {
  const [isValue, setIsValue] = useState('');
  const [isAddressToValue, setIsAddressToValue] = useState('');

  return (
    <section className="addresses">
      <h2 className="addresses__title">Адреса</h2>
      <div className="addresses__input">
        <Input
          errorText=""
          placeholder="Откуда забрать"
          icon={<NavigationArrowIcon width="16px" height="16px" />}
          value={isValue}
          onChange={(value) => setIsValue(value)}
          id="address-from"
        />
        <Input
          placeholder="Куда доставить"
          icon={<NavigationArrowIcon width="16px" height="16px" />}
          value={isAddressToValue}
          onChange={(value) => setIsAddressToValue(value)}
          id="address-to"
        />
      </div>
    </section>
  );
}
export default Addresses;
