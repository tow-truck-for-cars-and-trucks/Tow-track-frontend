import { configureStore } from '@reduxjs/toolkit';
import planSlice from '../../features/create-order/model/plan-slice';
import carTypeSlice from '../../features/create-order/model/car-type-slice';
import orderPriceSlice from '../../features/create-order/model/total-price-slice';
import createOrderSlice from '../../features/create-order/model/create-order-slice';
import feedbacksSlice from '../../features/create-order/model/feedback-slice';

const store = configureStore({
  reducer: {
    allPricing: planSlice,
    allCars: carTypeSlice,
    totalPrice: orderPriceSlice,
    createOrder: createOrderSlice,
    allFeedbacks: feedbacksSlice,
  },
});

export default store;
