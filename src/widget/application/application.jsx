import './application.scss';
import CreateOrder from '../../features/create-order/create-order';

function Application() {
  return (
    <section className="application">
      <h1 className="application__title">
        Вызвать эвакуатор в <span className="application__span">Москве</span>
      </h1>
      <CreateOrder />
    </section>
  );
}
export default Application;
