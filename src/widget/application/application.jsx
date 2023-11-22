import './application.scss';
import Transports from '../../features/transports/transports';

function Application() {
  return (
    <section className="application">
      <h1 className="application__title">
        Вызвать эвакуатор в <span className="application__span">Москве</span>
      </h1>
      <Transports />
    </section>
  );
}
export default Application;
