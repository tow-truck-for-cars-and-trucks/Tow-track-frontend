import { configureStore } from '@reduxjs/toolkit';
import tariffSlice from '../../features/create-order/model/tariff-slice';
import carTypeSlice from '../../features/create-order/model/car-type-slice';
import orderPriceSlice from '../../features/create-order/model/total-price';

const store = configureStore({
  reducer: {
    allPricing: tariffSlice,
    allCars: carTypeSlice,
    totalPrice: orderPriceSlice,
  },
});

export default store;
