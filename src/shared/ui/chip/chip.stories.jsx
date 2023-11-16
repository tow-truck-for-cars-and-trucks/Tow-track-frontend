import Chip from './chip';

export default {
	title: 'Shared/Chip',
	component: Chip,
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
		label: 'Легковой',
	},
};

export const Active = {
	args: {
		label: 'Легковой',
		isActive: true,
	},
};

export const Disabled = {
	args: {
		label: 'Легковой',
		disabled: true,
	},
};
