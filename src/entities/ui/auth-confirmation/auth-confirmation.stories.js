import AuthConfirmation from './auth-confirmation';

export default {
  title: 'entities/AuthConfirmation',
  component: AuthConfirmation,
  tags: ['autodocs'],
  arg: {
    primary: true,
  },
};

export const Default = {
  args: {
    phoneNumber: '+7 (964) 888 88 88',
    seconds: 50,
  },
};
