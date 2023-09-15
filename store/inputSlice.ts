import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputValue: {
    id: '',
    name: '',
    price: 0,
    category: '',
    description: '',
  },
};

export const inputSlice = createSlice({
  name: 'inputSlice',
  initialState,
  reducers: {
    setInitValue(state, action) {
      state.inputValue = action.payload;
    },
    updateInputValue(state, action) {
      const key = Object.keys(action.payload)[0];
      const value = Object.values(action.payload)[0];

      state.inputValue = {
        ...state.inputValue,
        [key]: value,
      };
    },
    cleanInputValue(state, action) {
      state.inputValue = initialState.inputValue;
    },
  },
});

export const { setInitValue, updateInputValue, cleanInputValue } =
  inputSlice.actions;
export default inputSlice.reducer;
