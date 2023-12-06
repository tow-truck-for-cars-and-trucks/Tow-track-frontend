import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
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

const getTariffSlice = createSlice({
  name: 'get-tariff',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTariff.fulfilled, (state, { payload }) => ({
      ...state,
      tariff: payload,
    }));
  },
});

export default getTariffSlice.reducer;
