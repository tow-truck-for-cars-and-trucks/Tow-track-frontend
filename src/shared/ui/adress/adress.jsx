import './adress.scss';

/**
 * @param {string} adressFrom - address to pick up from
 * @param {string} adressTo - address where to take it
 */
function Adress({ adressFrom, adressTo }) {
  return (
    <div className="adress">
      <ul className="adress__content">
        <li className="adress__caption">Откуда забрать</li>
        <li className="adress__value">{adressFrom}</li>
      </ul>
      <ul className="adress__content">
        <li className="adress__caption">Куда доставить</li>
        <li className="adress__value">{adressTo}</li>
      </ul>
    </div>
  );
}

export default Adress;
