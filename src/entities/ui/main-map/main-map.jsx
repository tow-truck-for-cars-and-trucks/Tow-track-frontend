import './main-map.scss';
import { useYMaps } from '@pbe/react-yandex-maps';
import { useRef, useEffect, useState } from 'react';
import mapPlacemark from '../../../assets/images/pin.svg';

function MainMap({ from }) {
  const mapRef = useRef(null);
  const ymaps = useYMaps(['Map', 'GeoObject', 'geolocation', 'geocode']);

  const [myMap, setMyMap] = useState(null);
  const [tochki, setTochki] = useState([]);

  useEffect(() => {
    if (from) {
      myMap.geoObjects.removeAll();
      myMap?.geoObjects.add(from);
    }
  }, [myMap, from]);

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

      if (tochki.length >= 2) {
        return;
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

      setTochki([...tochki, newGeoObject]);

      myMap.geoObjects.add(newGeoObject);
    };
    myMap.events.add('click', callback);

    return () => {
      myMap.events.remove('click', callback);
    };
  }, [myMap, tochki]);

  return (
    <div className="main-map">
      <div className="main-map__ymap" ref={mapRef} />
    </div>
  );
}

export default MainMap;
