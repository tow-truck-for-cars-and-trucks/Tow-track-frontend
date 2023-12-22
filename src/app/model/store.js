import { configureStore } from '@reduxjs/toolkit';
import planSlice from '../../features/create-order/model/plan-slice';
import carTypeSlice from '../../features/create-order/model/car-type-slice';
import orderPriceSlice from '../../features/create-order/model/total-price-slice';
import createOrderSlice from '../../features/create-order/model/create-order-slice';
import feedbacksSlice from '../../entities/ui/feedbacks/model/feedback-slice';
import pricePreloaderSlice from '../../features/create-order/model/price-preloader-slice';
import allOrdersSlice from '../../widget/my-order/model/all-orders-slice';
import successOrderSlice from '../../widget/order-success-widget/model/success-order-slice';
import orderConfirmationSlice from '../../features/order-confirmation/model/order-confirmation-slice';

const store = configureStore({
  reducer: {
    allPricing: planSlice,
    allCars: carTypeSlice,
    totalPrice: orderPriceSlice,
    pricePreloader: pricePreloaderSlice,
    createOrder: createOrderSlice,
    feedbacks: feedbacksSlice,
    allOrders: allOrdersSlice,
    successOrder: successOrderSlice,
    orderConfirmation: orderConfirmationSlice,
  },
});

export default store;
