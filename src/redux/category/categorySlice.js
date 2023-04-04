import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
  message: 'under construction',
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    status: (state) => state.message,
  },
});

export const { status } = categorySlice.actions;
export default categorySlice.reducer;
