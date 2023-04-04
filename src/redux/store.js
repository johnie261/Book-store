import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './book/bookSlice';
import categoryReducer from './category/categorySlice';

/* eslint-disable import/prefer-default-export */
export const store = configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});
