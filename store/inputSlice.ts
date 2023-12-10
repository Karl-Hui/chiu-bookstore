import { InputState, InputValueState, UpdateState } from '@/types/inputTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: InputState = {
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
    setInitValue(state, action: PayloadAction<InputValueState>) {
      state.inputValue = action.payload;
    },
    updateInputValue(state, action: PayloadAction<UpdateState>) {
      const key = Object.keys(action.payload)[0];
      const value = Object.values(action.payload)[0];

      state.inputValue = {
        ...state.inputValue,
        [key]: value,
      };
    },
    cleanInputValue(state) {
      state.inputValue = initialState.inputValue;
    },
  },
});

export const { setInitValue, updateInputValue, cleanInputValue } =
  inputSlice.actions;
export default inputSlice.reducer;
