import './popup-map.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useYMaps } from '@pbe/react-yandex-maps';
import { useRef, useEffect, useState } from 'react';
import {
  isPopupOpen,
  setPopupsClose,
} from '../../../shared/ui/popup/model/popup-slice';
import mapPlacemark from '../../../assets/images/pin.svg';
import Button from '../../../shared/ui/button/button';
import Popup from '../../../shared/ui/popup/popup';

function PopupMap({ coordinates, onFromChange, onToChange }) {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => isPopupOpen(state, 'popup-map'));
  const mapRef = useRef(null);
  const ymaps = useYMaps(['Map', 'GeoObject', 'geolocation', 'geocode']);

  const [myMap, setMyMap] = useState(null);

  const [selectionMode, setSelectionMode] = useState('from');

  useEffect(() => {
    if (coordinates) {
      myMap?.geoObjects.removeAll();
      myMap?.geoObjects.add(coordinates);
    }
  }, [myMap, coordinates]);

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    const map = new ymaps.Map(mapRef.current, {
      center: [55.76, 37.64],
      zoom: 10,
    });

    setMyMap(map);
  }, [ymaps, setMyMap]);

  useEffect(() => {
    if (!myMap) {
      return () => {};
    }

    const callback = (e) => {
      // Получение координат щелчка
      const coords = e.get('coords');

      ymaps.geocode(coords).then((res) => {
        const text = res.geoObjects.get(0).properties.get('text');

        if (selectionMode === 'from') {
          onFromChange(text);
        } else {
          onToChange(text);
        }

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

        setSelectionMode(selectionMode === 'from' ? 'to' : 'from');

        myMap.geoObjects.add(newGeoObject);
      });
    };
    myMap.events.add('click', callback);

    return () => {
      myMap.events.remove('click', callback);
    };
  }, [myMap, selectionMode]);

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
          <Button
            primary
            label="Подтвердить"
            onClick={() => {
              dispatch(setPopupsClose('popup-map'));
            }}
          />
        </div>
      </Popup>
    </section>
  );
}

export default PopupMap;
