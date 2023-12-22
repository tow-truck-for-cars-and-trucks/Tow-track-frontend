import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import orderApi from '../../../shared/api/order-api';

const initialState = {
  readyOrder: null,
  status: 'created',
};

export const activeCreatedOrder = createAsyncThunk(
  'orderConfirmationSlice/activeCreatedOrder',
  async (id, { rejectWithValue }) => {
    try {
      const result = await orderApi.updateOrderStatus(id, 'Активный');

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const orderConfirmationSlice = createSlice({
  name: 'orderConfirmationSlice',
  initialState,
  reducers: {
    resetState() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(activeCreatedOrder.fulfilled, (state, { payload }) => ({
      ...state,
      readyOrder: payload,
      status: 'active',
    }));
  },
});

export const { resetState } = orderConfirmationSlice.actions;
export default orderConfirmationSlice.reducer;
