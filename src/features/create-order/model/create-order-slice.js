import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import orderApi from '../../../shared/api/order-api';
import redirectUnauthUser from '../../../shared/utils/redirect-user';

const initialState = {
  order: null,
  temporaryOrder: null,
};

export const placeAnOrder = createAsyncThunk(
  'order/post',
  async (order, { rejectWithValue }) => {
    try {
      const result = await orderApi.createOrder(order);

      return result;
    } catch (error) {
      if (error.response.status === 401) redirectUnauthUser();
      return rejectWithValue(error.message);
    }
  }
);

export const getOrder = createAsyncThunk(
  'order/get',
  async (id, { rejectWithValue }) => {
    try {
      const result = await orderApi.getOrder(id);

      return result;
    } catch (error) {
      if (error.response.status === 401) redirectUnauthUser();
      return rejectWithValue(error.message);
    }
  }
);

export const updateOrder = createAsyncThunk(
  'order/patch',
  async ({ id, status }, { rejectWithValue }) => {
    try {
      const result = await orderApi.updateOrderStatus(id, status);

      return result;
    } catch (error) {
      if (error.response.status === 401) redirectUnauthUser();
      return rejectWithValue(error.message);
    }
  }
);

const createOrderSlice = createSlice({
  name: 'createOrder',
  initialState,
  reducers: {
    saveTemporaryOrder: (store, { payload }) => ({
      ...store,
      temporaryOrder: payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(placeAnOrder.fulfilled, (state, { payload }) => ({
      ...state,
      order: payload,
      temporaryOrder: null,
    }));
    builder.addCase(getOrder.fulfilled, (state, { payload }) => ({
      ...state,
      order: payload,
    }));
    builder.addCase(updateOrder.fulfilled, (state, { payload }) => ({
      ...state,
      order: payload,
    }));
  },
});

export const { saveTemporaryOrder } = createOrderSlice.actions;

export default createOrderSlice.reducer;
