import { configureStore } from '@reduxjs/toolkit';
import planSlice from '../../features/create-order/model/plan-slice';
import carTypeSlice from '../../features/create-order/model/car-type-slice';
import orderPriceSlice from '../../features/create-order/model/total-price';

const store = configureStore({
  reducer: {
    allPricing: planSlice,
    allCars: carTypeSlice,
    totalPrice: orderPriceSlice,
  },
});

export default store;
