import { configureStore } from '@reduxjs/toolkit';
import bookListReducer from './bookSlice';
import inputSliceReducer from './inputSlice';
import modalSliceReducer from './modalSlice';
import { createWrapper } from 'next-redux-wrapper';

export const makeStore = () => {
  return configureStore({
    reducer: {
      bookList: bookListReducer,
      inputSlice: inputSliceReducer,
      modalSlice: modalSliceReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
