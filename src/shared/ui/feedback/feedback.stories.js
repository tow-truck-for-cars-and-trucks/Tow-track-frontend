import FeedBack from './feedback';

export default {
  title: 'Shared/FeedBack',
  component: FeedBack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const DefaultReviewCard = {
  args: {
    feedback: {
      rating: 5.0,
      name: 'Констатин Константиновский',
      comment:
        'Всё отлично и профессионально. Действительно самая дешёвая услуга по Москве!',
    },
  },
};
