import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import feedbackApi from '../../../../shared/api/feedback-api';
import redirectUnauthUser from '../../../../shared/utils/redirect-user';

const initialState = {
  allFeedbacks: [],
  ordersWithFeedback: [],
};

export const getFeedbacks = createAsyncThunk(
  'feedbacks/get',
  async (_, { rejectWithValue }) => {
    try {
      const result = await feedbackApi.getFeedbacks();

      return result;
    } catch (error) {
      if (error.response.status === 401) redirectUnauthUser();
      return rejectWithValue(error.message);
    }
  }
);

export const createNewFeedback = createAsyncThunk(
  'feedback/post',
  async ({ feedback, id }, { rejectWithValue }) => {
    try {
      await feedbackApi.createFeedback(feedback, id);

      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const feedbacksSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getFeedbacks.fulfilled, (state, { payload }) => ({
      ...state,
      allFeedbacks: payload,
    }));
    builder.addCase(createNewFeedback.fulfilled, (state, { payload }) => ({
      ...state,
      ordersWithFeedback: [...state.ordersWithFeedback, payload],
    }));
  },
});

export default feedbacksSlice.reducer;
