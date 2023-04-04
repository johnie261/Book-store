import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookItems: [],
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
      state.bookItems.filter((item) => item.id !== payload.id);
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
