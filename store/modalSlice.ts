import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';

const initialState = {
  show: false,
};

export const modalSlice = createSlice({
  name: 'isModalShow',
  initialState,
  reducers: {
    setIsModalShow(state, action) {
      state.show = action.payload;
    },
  },
});

export const { setIsModalShow } = modalSlice.actions;

export default modalSlice.reducer;
