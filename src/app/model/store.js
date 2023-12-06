import { configureStore } from '@reduxjs/toolkit';
import getTariffSlice from '../../features/create-order/model/tariff-slice';
import getCarTypeSlice from '../../features/create-order/model/car-type-slice';

const store = configureStore({
  reducer: {
    allPricing: getTariffSlice,
    allCars: getCarTypeSlice,
  },
});

export default store;
