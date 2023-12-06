import { configureStore } from '@reduxjs/toolkit';
import tariffSlice from '../../features/create-order/model/tariff-slice';
import carTypeSlice from '../../features/create-order/model/car-type-slice';

const store = configureStore({
  reducer: {
    allPricing: tariffSlice,
    allCars: carTypeSlice,
  },
});

export default store;
