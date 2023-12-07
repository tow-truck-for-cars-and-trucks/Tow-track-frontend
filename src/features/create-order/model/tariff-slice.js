import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';
import tariffApi from '../../../shared/api/tariff-api';

const initialState = {
  tariff: [],
};

export const getTariff = createAsyncThunk(
  'tariff/get',
  async (_, { rejectWithValue }) => {
    try {
      const result = await tariffApi.getTariffType();

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tariffSlice = createSlice({
  name: 'tariff',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTariff.fulfilled, (state, { payload }) => ({
      ...state,
      tariff: payload,
    }));
  },
});

export const getTariffTitle = createSelector(
  [(state) => state.allPricing, (_, newOrder) => newOrder],
  (allPricing, newOrder) =>
    allPricing.tariff.find((x) => x.id === newOrder?.tariff)?.name
);

export default tariffSlice.reducer;
