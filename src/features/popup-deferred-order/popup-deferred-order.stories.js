import PopupDeferredOrder from './popup-deferred-order';

export default {
  title: 'entities/PopupDeferredOrder',
  component: PopupDeferredOrder,
  tags: ['autodocs'],
  arg: {
    primary: true,
  },
};

export const Default = {
  args: {
    isOpen: true,
  },
};
