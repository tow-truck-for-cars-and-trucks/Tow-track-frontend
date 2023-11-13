import Pricing from './pricing';

export default {
	title: 'Shared/Pricing',
	component: Pricing,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Default = {
	args: {
		title: 'Эконом',
		description: 'Оптимальный вариант',
		price: '1500',
	},
};

export const Active = {
	args: {
		title: 'Эконом',
		description: 'Оптимальный вариант',
		price: '1500',
		isActive: true,
	},
};
