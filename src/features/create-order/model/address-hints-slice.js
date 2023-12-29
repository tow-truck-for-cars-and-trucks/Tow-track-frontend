import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import addressHintsApi from '../../../shared/api/address-hints-api';

const initialState = {
  addresses: [],
};

export const getAddressHints = createAsyncThunk(
  'addressHints/get',
  async (address, { rejectWithValue }) => {
    try {
      const result = await addressHintsApi.getAddressHints(address);

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const addressHintsSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAddressHints.fulfilled, (state, { payload }) => ({
      ...state,
      addresses: payload,
    }));
  },
});

export default addressHintsSlice.reducer;
