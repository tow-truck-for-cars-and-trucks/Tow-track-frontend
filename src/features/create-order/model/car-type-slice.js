import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from '@reduxjs/toolkit';
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

const carTypeSlice = createSlice({
  name: 'carType',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCarType.fulfilled, (state, { payload }) => ({
      ...state,
      carType: payload,
    }));
  },
});

export const getCarTypeTitle = createSelector(
  [(state) => state.allCars, (_, newOrder) => newOrder],
  (allCars, newOrder) =>
    allCars.carType.find((x) => x.id === newOrder?.carType)?.car_type
);

export default carTypeSlice.reducer;
