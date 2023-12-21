import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import orderApi from '../../../shared/api/order-api';

const initialState = {
  price: null,
};

export const getOrderPrice = createAsyncThunk(
  'orderPrice/get',
  async (order, { rejectWithValue }) => {
    try {
      const result = await orderApi.getOrderPrice(order);

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const orderPriceSlice = createSlice({
  name: 'orderPrice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrderPrice.fulfilled, (state, { payload }) => ({
      ...state,
      price: payload,
    }));
  },
});
