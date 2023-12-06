import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import carTypeApi from '../../../shared/api/car-type-api';

const initialState = {
  carType: [],
};

export const getCarType = createAsyncThunk(
  'carType/get',
  async (_, { rejectWithValue }) => {
    try {
      const result = await carTypeApi.getCarType();

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getCarTypeSlice = createSlice({
  name: 'get-carType',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarType.fulfilled, (state, { payload }) => ({
      ...state,
      carType: payload,
    }));
  },
});

export default getCarTypeSlice.reducer;
