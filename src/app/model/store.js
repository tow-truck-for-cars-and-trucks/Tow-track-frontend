import { configureStore } from '@reduxjs/toolkit';
import planSlice from '../../features/create-order/model/plan-slice';
import carTypeSlice from '../../features/create-order/model/car-type-slice';
import { orderPriceSlice } from '../../features/create-order/model/total-price-slice';
import createOrderSlice from '../../features/create-order/model/create-order-slice';
import feedbacksSlice from '../../entities/ui/feedbacks/model/feedback-slice';
import pricePreloaderSlice from '../../features/create-order/model/price-preloader-slice';
import allOrdersSlice from '../../widget/my-order/model/all-orders-slice';
import popupsSlice from '../../shared/ui/popup/model/popup-slice';
import addressHintsSlice from '../../features/create-order/model/address-hints-slice';
import profileSlice from '../../pages/profile/model/profile-slice';

const store = configureStore({
  reducer: {
    allPricing: planSlice,
    allCars: carTypeSlice,
    totalPrice: orderPriceSlice.reducer,
    pricePreloader: pricePreloaderSlice,
    createOrder: createOrderSlice,
    feedbacks: feedbacksSlice,
    allOrders: allOrdersSlice,
    popups: popupsSlice,
    addressHints: addressHintsSlice,
    profile: profileSlice,
  },
});

export const setupStore = (preloadedState) =>
  configureStore({
    reducer: {
      allPricing: planSlice,
      allCars: carTypeSlice,
      totalPrice: orderPriceSlice.reducer,
      pricePreloader: pricePreloaderSlice,
      createOrder: createOrderSlice,
      feedbacks: feedbacksSlice,
      allOrders: allOrdersSlice,
      popups: popupsSlice,
      addressHints: addressHintsSlice,
      profile: profileSlice,
    },
    preloadedState,
  });

export default store;
