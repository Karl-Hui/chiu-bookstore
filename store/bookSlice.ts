import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InputState } from '@/types/inputTypes.jsx';
import { HYDRATE } from 'next-redux-wrapper';
import { access } from 'fs';

interface Book {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}
interface BookState {
  value: Book[];
}

const initialState: BookState = {
  value: [],
};

export const bookSlice = createSlice({
  name: 'bookList',
  initialState,
  reducers: {
    setBook: (state, action: PayloadAction<BookState>) => {
      state.value = action.payload.value;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.value.push(action.payload);
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action: PayloadAction<InputState>) => {
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
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.value = action.payload.bookList.value;
    },
  },
});

export const { setBook, addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;
