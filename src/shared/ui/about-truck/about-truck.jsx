import './about-truck.scss';
import StarFillIcon from '../icons/star-fill-icon';

/**
 * @param {string} carModel - title of the car model
 * @param {string} carNumber - title of the car number
 * @param {string} carDriver - car driver name
 * @param {string} rating - driver rating
 */

function AboutTrack({ modelCar, licensePlates, avarageScore, driver }) {
  return (
    <div className="about-track">
      <div className="about-track__info-content">
        <div className="about-track__info">
          <p className="about-track__description">Марка и модель</p>
          <p className="about-track__data">{modelCar}</p>
        </div>
        <div className="about-track__info">
          <p className="about-track__description">ГРЗ</p>
          <p className="about-track__data">{licensePlates}</p>
        </div>
      </div>
      <a href="/" className="about-track__certificate">
        Сертификат
      </a>
      <div className="about-track__info">
        <p className="about-track__description">Водитель</p>
        <div className="about-track__rating-content">
          <StarFillIcon width="16px" height="16px" color="#3B3E49" />
          <p className="about-track__rating">{avarageScore}</p>
        </div>
        <p className="about-track__data">{driver}</p>
      </div>
    </div>
  );
}

AboutTrack.defaultProps = {
  isShow: false,
};

export default AboutTrack;
