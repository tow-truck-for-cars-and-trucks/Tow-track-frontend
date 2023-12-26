import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import orderApi from '../../../shared/api/order-api';

const initialState = {
  successOrder: null,
  status: 'active',
};
export const cancelOrderRequest = createAsyncThunk(
  'successOrder/cancelOrderRequest',
  async (id, { rejectWithValue }) => {
    try {
      const result = await orderApi.updateOrderStatus(id, 'Отмененный');

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const successOrderSlice = createSlice({
  name: 'successOrder',
  initialState,
  reducers: {
    resetState() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cancelOrderRequest.fulfilled, (state, { payload }) => ({
      ...state,
      successOrder: payload,
      status: 'canceled',
    }));
  },
});

export const { resetState } = successOrderSlice.actions;
export default successOrderSlice.reducer;
