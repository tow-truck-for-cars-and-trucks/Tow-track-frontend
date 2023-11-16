import AdvantageCard from './advantage-card';
import CashIcon from '../icons/cash-icon';
import TrackIcon from '../icons/track-icon';
import RatingIcon from '../icons/rating-icon';

export default {
  title: 'Shared/AdvantageCard',
  component: AdvantageCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const DefaultCashCard = {
  args: {
    icon: <CashIcon width="64px" height="64px" />,
    title: 'Цена известна заранее',
    subtitle: 'Оплата наличными или картой через СПБ',
  },
};

export const DefaultTrackCard = {
  args: {
    icon: <TrackIcon width="64px" height="64px" />,
    title: 'Быстрая подача',
    subtitle: 'Приедем оперативно, за 20-30 мин. в пределах города',
  },
};

export const DefaultRatingCard = {
  args: {
    icon: <RatingIcon width="64px" height="64px" />,
    title: 'Честный рейтинг водителей',
    subtitle: 'Учитываем опыт работы и отзывы клиентов',
  },
};
