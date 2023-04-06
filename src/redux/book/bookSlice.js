import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  bookItems: [],
  isLoading: true,
  error: null,
};

const appId = 'fsISoTleXrIiKHYrh9Cq';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const headers = {
  'Content-Type': 'application/json',
};

export const getBookItems = createAsyncThunk('book/getBookItems',
  async (thunkAPI) => {
    try {
      const res = await axios.get(`${URL + appId}/books`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  });

export const createNewBook = createAsyncThunk('book/createNewBook',
  async (data, thunkAPI) => {
    try {
      const res = await axios.post(`${URL + appId}/books`, data, { headers });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
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
  extraReducers: (builder) => {
    builder
    // get book from API
      .addCase(getBookItems.pending, (state) => ({
        ...state,
      }))
      .addCase(getBookItems.fulfilled, (state, action) => {
        const newBook = Object.entries(action.payload).map(
          (book) => ({
            item_id: book[0],
            ...book[1][0],
          }),
        );
        return { ...state, bookItems: newBook };
      })
      .addCase(getBookItems.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }))
    // Add new book to API
      .addCase(createNewBook.pending, (state) => ({
        ...state,
      }))
      .addCase(createNewBook.fulfilled, (state) => ({
        ...state,
      }))
      .addCase(createNewBook.rejected, (state, action) => ({
        ...state,
        error: action.payload,
      }))
    // remove book from API
      .addCase(removeBookItem.pending, (state) => ({
        ...state,
      }))
      .addCase(removeBookItem.fulfilled, (state) => ({
        ...state,
      }))
      .addCase(removeBookItem.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
