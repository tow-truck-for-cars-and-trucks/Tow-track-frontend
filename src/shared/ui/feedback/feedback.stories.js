import Feedback from './feedback';

export default {
  title: 'Shared/Feedback',
  component: Feedback,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const DefaultReviewCard = {
  args: {
    feedback: {
      score: 5.0,
      name: 'Констатин Константиновский',
      comment:
        'Всё отлично и профессионально. Действительно самая дешёвая услуга по Москве!',
    },
  },
};
