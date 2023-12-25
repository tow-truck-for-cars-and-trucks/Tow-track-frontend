import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  popups: [],
};

const popupsSlice = createSlice({
  name: 'popups',
  initialState,
  reducers: {
    setPopupsOpen: (store, { payload }) => ({
      popups: [...store.popups, payload],
    }),
    setPopupsClose: (store, { payload }) => ({
      popups: store.popups.filter((x) => x !== payload),
    }),
  },
});

export const isPopupOpen = createSelector(
  [(state) => state.popups, (_, popupId) => popupId],
  (popups, popupId) => popups.popups.some((x) => x === popupId)
);

export const { setPopupsOpen, setPopupsClose } = popupsSlice.actions;

export default popupsSlice.reducer;
