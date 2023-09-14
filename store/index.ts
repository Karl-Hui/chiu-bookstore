import { configureStore } from '@reduxjs/toolkit';
import bookListReducer from './bookSlice';
import inputSliceReducer from './inputSlice';

const store = configureStore({
  reducer: {
    bookList: bookListReducer,
    inputSlice: inputSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
