import { configureStore } from '@reduxjs/toolkit';
import bookListReducer from './bookSlice';
import inputSliceReducer from './inputSlice';
import modalSliceReducer from './modalSlice';

const store = configureStore({
  reducer: {
    bookList: bookListReducer,
    inputSlice: inputSliceReducer,
    modalSlice: modalSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
