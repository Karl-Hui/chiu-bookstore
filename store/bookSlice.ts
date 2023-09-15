import { createSlice } from '@reduxjs/toolkit';
import { mockBookData } from './data.js';

const initialState = mockBookData;

export const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.value.push(action.payload);
    },
    deleteBook: (state, action) => {
      const newValue = state.value.filter((book) => book.id !== action.payload);
      state.value = newValue;
    },
    updateBook: (state, action) => {
      const { id } = action.payload.inputValue;

      const bookIndex = state.value.findIndex((book) => {
        return book.id === id;
      });

      if (bookIndex !== -1) {
        state.value[bookIndex] = {
          ...state.value[bookIndex],
          ...action.payload.inputValue,
        };
      }
    },
  },
});

export const { addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
