import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import bookItems from './bookItems';
// import bookItems from './bookItems';

const initialState = {
  bookItems: [],
  isLoading: true,
  error: null,
};
// console.log(initialState);

const appId = 'fsISoTleXrIiKHYrh9Cq';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const headers = {
  'Content-Type': 'application/json',
};

export const getBookItems = createAsyncThunk('book/getBookItems',
  async (thunkAPI) => {
    try {
      const res = await axios.get(`${URL + appId}/books`);
      // console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

export const createNewBook = createAsyncThunk('book/createNewBook',
  async (data) => {
    // console.log(data);
    try {
      const res = await axios.post(`${URL + appId}/books`, data, { headers });
      return res.data;
    } catch (error) {
      return console.log(error);
    //  console.log(error);
    //  return thunkAPI.rejectWithValue('something went wrong');
    }
  });

export const removeBookItem = createAsyncThunk('book/removeBookItem',
  async (bookId, thunkAPI) => {
    try {
      const res = await axios.delete(`${URL + appId}/books/${bookId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

const bookSlice = createSlice({
  name: 'book',
  initialState,

  reducers: {},
  /*
    removeBook: (state, { payload }) => {
      state.bookItems = state.bookItems.filter((item) => item.id !== payload);
    },
  },
*/

  extraReducers: (builder) => {
    builder
    // get book
    /* eslint-disable no-param-reassign */
      .addCase(getBookItems.pending, (state) => {
        state.isLoading = true;
      })
    /*      .addCase(getBookItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookItems = action.payload;
        console.log(action.payload);
        }) */

      .addCase(getBookItems.fulfilled, (state, action) => {
        // console.log(action.payload);
        const newBook = Object.entries(action.payload).map(
          (book) => ({
            item_id: book[0],
            ...book[1][0],
          }),
        );

        console.log(newBook);
        return { ...state, bookItems: newBook };
      })

      .addCase(getBookItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
    // Add new book
      .addCase(createNewBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewBook.fulfilled, (state, action) => {
        console.log(action.payload.item_id);
        state.bookItems.push({
          item_id: action.payload.item_id,
          title: action.payload.title,
          author: action.payload.author,
        });
      })
      .addCase(createNewBook.rejected, (state) => {
        state.isLoading = false;
        // state.error = action.payload;
      })
    // remove book
      .addCase(removeBookItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBookItem.fulfilled, (state, { payload }) => {
        // state.isLoading = false;
        //  state.bookItems = payload;
        // state.bookItems = state.bookItems.filter((item) => item.id !== payload);
        // ...state,
        // isLoading: false,
        state.bookItems = state.bookItems.filter((item) => item.id !== payload);
      })
      .addCase(removeBookItem.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
