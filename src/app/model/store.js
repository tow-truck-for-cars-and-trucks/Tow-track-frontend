import { configureStore } from '@reduxjs/toolkit';
import tariffSlice from './tariff-slice';
import carTypeSlice from './car-type-slice';

const store = configureStore({
  reducer: {
    allPricing: tariffSlice,
    allCars: carTypeSlice,
  },
});

export default store;
