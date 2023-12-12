import { createSlice } from '@reduxjs/toolkit';
import { getOrderPrice } from './total-price-slice';

const pricePreloaderSlice = createSlice({
  name: 'pricePreloader',
  initialState: false,
  reducers: {
    togglePreloader: (state) => !state,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderPrice.pending, () => true)
      .addCase(getOrderPrice.fulfilled, () => false)
      .addCase(getOrderPrice.rejected, () => false);
  },
});

export const selectPreloader = (state) => state.pricePreloader;

export const { togglePreloader } = pricePreloaderSlice.actions;
export default pricePreloaderSlice.reducer;
