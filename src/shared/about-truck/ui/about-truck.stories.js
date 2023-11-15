import AboutTruck from './about-truck';

export default {
	title: 'Shared/AboutTruck',
	component: AboutTruck,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export const Default = {
	args: {
		carModel: 'Isuzu NPR-75LK',
		carNumber: 'А 123 АА 77 RUS',
		carDriver: 'Константинопольский Иван',
		rating: '5,0',
	},
};
