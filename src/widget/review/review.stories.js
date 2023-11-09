import Review from './review';

export default {
	title: 'Widget/Review',
	component: Review,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export const DefaultReviewCard = {
	args: {
		rating: '5,0',
		name: 'Констатин Константиновский',
		feedback:
			'Всё отлично и профессионально. Действительно самая дешёвая услуга по Москве!',
	},
};
