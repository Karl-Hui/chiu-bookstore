import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ModalState {
  isShow: Boolean;
}

const initialState: ModalState = {
  isShow: false,
};

export const modalSlice = createSlice({
  name: 'isModalShow',
  initialState,
  reducers: {
    setIsModalShow(state, action: PayloadAction<ModalState>) {
      state.isShow = action.payload.isShow;
    },
  },
});

export const { setIsModalShow } = modalSlice.actions;

export default modalSlice.reducer;
