import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import orderApi from '../../../shared/api/order-api';
import redirectUnauthUser from '../../../shared/utils/redirect-user';
import { createNewFeedback } from '../../../entities/ui/feedbacks/model/feedback-slice';

const initialState = {
  activeOrders: [],
  completedOrders: [],
  cancelledOrders: [],
};

export const getOrders = createAsyncThunk(
  'orders/get',
  async (status, { rejectWithValue }) => {
    try {
      const result = await orderApi.getAllOrders(status);

      return { status, result };
    } catch (error) {
      if (error.response.status === 401) redirectUnauthUser();
      return rejectWithValue(error.message);
    }
  }
);

const allOrdersSlice = createSlice({
  name: 'allOrders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getOrders.fulfilled,
      (state, { payload: { status, result } }) => {
        if (status === 'активный') {
          return {
            ...state,
            activeOrders: result,
          };
        }
        if (status === 'завершенный') {
          return {
            ...state,
            completedOrders: result,
          };
        }
        if (status === 'отмененный') {
          return {
            ...state,
            cancelledOrders: result,
          };
        }

        return state;
      }
    );
    builder.addCase(createNewFeedback.fulfilled, (state, { payload }) => {
      const newOrder = state.completedOrders.find((o) => o.id === payload);
      newOrder.isHavingFeedback = true;
    });
  },
});

export default allOrdersSlice.reducer;
