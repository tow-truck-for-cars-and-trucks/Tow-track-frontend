import './contacts-map.scss';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import ContactsInfo from '../../shared/ui/contacts-info/contacts-info';

function ContactsMap() {
  const defaultState = {
    center: [55.588867, 37.031152],
    zoom: 8,
  };
  return (
    <section className="contacts-map">
      <div className="contacts-map__container">
        <YMaps>
          <Map className="contacts-map__ymap" defaultState={defaultState}>
            <Placemark geometry={[55.588867, 37.031152]} />
          </Map>
        </YMaps>
      </div>
      <ContactsInfo />
    </section>
  );
}

export default ContactsMap;
