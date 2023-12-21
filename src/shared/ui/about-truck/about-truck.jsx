import './about-truck.scss';
import StarFillIcon from '../icons/star-fill-icon';

/**
 * @param {string} modelCar - title of the car model
 * @param {string} licensePlates - title of the car number
 * @param {string} driver - car driver name
 * @param {number} avarageScore - driver rating
 */

function AboutTruck({ modelCar, licensePlates, avarageScore, driver }) {
  return (
    <div className="about-truck">
      <div className="about-truck__info-content">
        <div className="about-truck__info">
          <p className="about-truck__description">Марка и модель</p>
          <p className="about-truck__data">{modelCar}</p>
        </div>
        <div className="about-truck__info">
          <p className="about-truck__description">ГРЗ</p>
          <p className="about-truck__data">{licensePlates}</p>
        </div>
      </div>
      <a href="/" className="about-truck__certificate">
        Сертификат
      </a>
      <div className="about-truck__info">
        <p className="about-truck__description">Водитель</p>
        <div className="about-truck__rating-content">
          <StarFillIcon width="16px" height="16px" color="#3B3E49" />
          <p className="about-truck__rating">{avarageScore}</p>
        </div>
        <p className="about-truck__data">{driver}</p>
      </div>
    </div>
  );
}

AboutTruck.defaultProps = {
  isShow: false,
};

export default AboutTruck;
