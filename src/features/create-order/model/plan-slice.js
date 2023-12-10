import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';
import tariffApi from '../../../shared/api/tariff-api';

const initialState = {
  tariff: [],
};

export const getPlan = createAsyncThunk(
  'tariff/get',
  async (_, { rejectWithValue }) => {
    try {
      const result = await tariffApi.getPlanType();

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const planSlice = createSlice({
  name: 'tariff',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlan.fulfilled, (state, { payload }) => ({
      ...state,
      tariff: payload,
    }));
  },
});

export const getPlanTitle = createSelector(
  [(state) => state.allPricing, (_, newOrder) => newOrder],
  (allPricing, newOrder) =>
    allPricing.tariff.find((x) => x.id === newOrder?.tariff)?.name
);

export default planSlice.reducer;
