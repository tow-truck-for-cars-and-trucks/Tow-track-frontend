import NumberInput from './number-input';

export default {
	title: 'Shared/NumberInput',
	component: NumberInput,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
};

export const EmptyNumber = {
	args: {
		mask: '999 999 999',
		placeholder: '000 000 000',
	},
};

export const Filled = {
	args: {
		value: '123 123 123',
	},
};

export const Error = {
	args: {
		value: '123 123 123',
		errorMessage: true,
	},
};

export const EmptyPhoneNumber = {
	args: {
		mask: '+7 (999) 999 99 99',
		placeholder: '+ 7 (___) ___ __ __',
	},
};

export const FilledPhoneNumber = {
	args: {
		value: '+7 (999) 999 99 99',
	},
};

export const ErrorPhoneNumber = {
	args: {
		value: '+7 (999) 999 99 99',
		errorMessage: true,
	},
};
