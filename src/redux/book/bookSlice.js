import { createSlice } from '@reduxjs/toolkit';
import bookItems from './bookItems';

const initialState = {
  bookItems,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      state.bookItems.push({
        id: payload.id,
        title: payload.title,
        author: payload.author,
      });
    },
    removeBook: (state, { payload }) => {
      /* eslint-disable no-param-reassign */
      state.bookItems = state.bookItems.filter((item) => item.id !== payload);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
