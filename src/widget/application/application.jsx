import './application.scss';

import HandleCounter from '../../entities/counter/counter';

function Application() {
	return (
		<section className="calc">
			<h1 className="calc__title">Вызвать эвакуатор в Москве</h1>
			<HandleCounter />
		</section>
	);
}
export default Application;
