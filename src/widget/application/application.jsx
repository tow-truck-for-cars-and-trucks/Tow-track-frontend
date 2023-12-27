import './application.scss';
import CreateOrder from '../../features/create-order/ui/create-order';

function Application({ innerRef }) {
  return (
    <section className="application" ref={innerRef} data-testid="application">
      <div className="application__content">
        <h1 className="application__title">
          Вызвать эвакуатор в <span className="application__span">Москве</span>
        </h1>
        <CreateOrder />
      </div>
    </section>
  );
}
export default Application;
