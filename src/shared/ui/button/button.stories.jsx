import Button from './button';

export default {
	title: 'Shared/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
	},
};

export const Primary = {
	args: {
		primary: true,
		label: 'Оформить заказ',
	},
};

export const PrimaryDisabled = {
	args: {
		label: 'Оформить заказ',
		primary: true,
		disabled: true,
	},
};

export const Secondary = {
	args: {
		label: 'Оформить заказ',
		primary: false,
	},
};

export const SecondaryDisabled = {
	args: {
		label: 'Оформить заказ',
		disabled: true,
		primary: false,
	},
};
