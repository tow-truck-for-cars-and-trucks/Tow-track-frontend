import Comment from './comment';

export default {
  title: 'Shared/Comment',
  component: Comment,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    variant: 'default',
  },
};
export const Writing = {
  args: {
    variant: 'writing',
    content: 'Не крутится руль, слома',
    initialCount: 23,
  },
};

export const Done = {
  args: {
    variant: 'done',
    content: 'Не крутится руль, сломался усилитель',
  },
};
