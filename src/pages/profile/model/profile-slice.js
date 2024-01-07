import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import profileApi from '../../../shared/api/profile-api';

const initialState = {
  id: null,
  firstName: '',
  phoneNumber: '',
};

export const getProfile = createAsyncThunk(
  'profile/get',
  async (_, { rejectWithValue }) => {
    try {
      const result = await profileApi.getProfile();

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, { payload }) => ({
      ...state,
      id: payload.id,
      firstName: payload.firstName,
      phoneNumber: payload.phoneNumber,
      consent: payload.consent,
    }));
  },
});

export const profileSelector = (state) => state.profile;

export default profileSlice.reducer;
