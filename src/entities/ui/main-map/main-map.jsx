import './main-map.scss';
import { YMaps, Map } from '@pbe/react-yandex-maps';

function MainMap() {
  const defaultState = {
    center: [55.588867, 37.031152],
    zoom: 8,
  };

  return (
    <section className="main-map">
      <div className="main-map__container">
        <YMaps>
          <Map className="main-map__ymap" defaultState={defaultState} />
        </YMaps>
      </div>
    </section>
  );
}

export default MainMap;
