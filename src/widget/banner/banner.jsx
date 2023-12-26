import './banner.scss';
import AdvantageCard from '../../shared/ui/advantage-card/advantage-card';
import CashIcon from '../../shared/ui/icons/cash-icon';
import TrackIcon from '../../shared/ui/icons/track-icon';
import RatingIcon from '../../shared/ui/icons/rating-icon';

function Banner() {
  return (
    <section className="banner" data-testid="banner">
      <div className="banner__header">
        <h1 className="banner__title">TT Express &mdash; </h1>
        <span className="banner__title">удобный сервис для вызова</span>
        <span className="banner__title">эвакуатора 24/7</span>
      </div>
      <div className="banner__cards">
        <div className="banner__card">
          <AdvantageCard
            icon={<CashIcon width="64px" height="64px" />}
            title="Цена известна заранее"
            subtitle="Оплата наличными или картой через СПБ"
          />
        </div>
        <div className="banner__card">
          <AdvantageCard
            icon={<TrackIcon width="64px" height="64px" />}
            title="Быстрая подача"
            subtitle="Приедем оперативно, за 20-30 мин. в пределах города"
          />
        </div>
        <div className="banner__card">
          <AdvantageCard
            icon={<RatingIcon width="64px" height="64px" />}
            title="Честный рейтинг водителей"
            subtitle="Учитываем опыт работы и отзывы клиентов"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
