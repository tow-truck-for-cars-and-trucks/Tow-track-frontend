import './popup-map.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useYMaps } from '@pbe/react-yandex-maps';
import { useRef, useEffect } from 'react';
import {
  isPopupOpen,
  setPopupsClose,
} from '../../../shared/ui/popup/model/popup-slice';
import mapPlacemark from '../../../assets/images/pin.svg';
import Button from '../../../shared/ui/button/button';
import Popup from '../../../shared/ui/popup/popup';

function MainMap() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => isPopupOpen(state, 'popup-map'));
  const mapRef = useRef(null);
  const ymaps = useYMaps(['Map', 'GeoObject']);

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    const map = new ymaps.Map(mapRef.current, {
      center: [55.76, 37.64],
      zoom: 10,
    });

    map.events.add('click', (e) => {
      // Получение координат щелчка
      const coords = e.get('coords');
      const newGeoObject = new ymaps.GeoObject(
        {
          geometry: {
            type: 'Point', // тип геометрии - точка
            coordinates: coords, // координаты точки
          },
        },
        {
          iconLayout: 'default#image',
          iconImageHref: mapPlacemark,
          iconImageSize: [44, 52],
        }
      );
      map.geoObjects.add(newGeoObject);
    });
  }, [ymaps]);

  return (
    <section className="popup-map">
      <Popup
        active={isOpen}
        setActive={() => {
          dispatch(setPopupsClose('popup-map'));
        }}
        contentBottom
      >
        <div className="popup-map__ymap" ref={mapRef} />
        <div className="popup-map__button">
          <Button primary label="Подтвердить" />
        </div>
      </Popup>
    </section>
  );
}

export default MainMap;
