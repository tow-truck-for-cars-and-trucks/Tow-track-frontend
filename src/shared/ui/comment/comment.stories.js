import Comment from './comment';

export default {
  title: 'Shared/Comment',
  component: Comment,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    // variant: 'default',
  },
};
export const Writing = {
  args: {
    content: 'Не крутится руль, слома',
    initialCount: 23,
  },
};

export const Done = {
  args: {
    content: 'Не крутится руль, сломался усилитель',
  },
};
