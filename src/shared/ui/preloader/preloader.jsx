import './preloader.scss';

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round" />
      </div>
      <p className="preloader__caption">Подождите, идет загрузка</p>
    </div>
  );
}

export default Preloader;
