import './application.scss';
import Addresses from '../../entities/addresses/addresses';
import Transports from '../../entities/transports/transports';

function Application() {
	return (
		<section className="application">
			<h1 className="application__title">
				Вызвать эвакуатор в <span className="application__span">Москве</span>
			</h1>
			<Addresses />
			<Transports />
		</section>
	);
}
export default Application;
