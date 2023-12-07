import './address.scss';

/**
 * @param {string} adressFrom - address to pick up from
 * @param {string} adressTo - address where to take it
 */
function Address({ addressFrom, addressTo }) {
  return (
    <div className="adress">
      <ul className="adress__content">
        <li className="adress__caption">Откуда забрать</li>
        <li className="adress__value">{addressFrom}</li>
      </ul>
      <ul className="adress__content">
        <li className="adress__caption">Куда доставить</li>
        <li className="adress__value">{addressTo}</li>
      </ul>
    </div>
  );
}

export default Address;
