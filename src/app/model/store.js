import { configureStore } from '@reduxjs/toolkit';
import tariffSlice from '../../features/create-order/model/tariff-slice';
import carTypeSlice from '../../features/create-order/model/car-type-slice';
import orderPriceSlice from '../../features/create-order/model/total-price';
import feedbacksSlice from '../../entities/ui/feedbacks/model/feedback-slice';

const store = configureStore({
  reducer: {
    allPricing: tariffSlice,
    allCars: carTypeSlice,
    totalPrice: orderPriceSlice,
    allFeedbacks: feedbacksSlice,
  },
});

export default store;
