import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books = [...state.books, action.payload];
    },
    removeBook: (state, action) => {
      const filteredBooks = state.books.filter((book) => book.id !== action.payload);
      state.books = [...filteredBooks];
    },
  },
});

export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice.actions;
