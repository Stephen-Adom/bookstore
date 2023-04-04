import { createSlice } from '@reduxjs/toolkit';
import { fetchBooks, addBooksToStore, deleteBook } from './bookThunks';
import Book from '../../model/Book.model';

const formatBooks = (books) => Object.keys(books).map((key) => {
  const newBook = new Book(
    key,
    books[key][0].title,
    books[key][0].author,
    books[key][0].category,
  );
  return newBook;
});

const initialState = {
  books: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.books = formatBooks(action.payload.data);
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addBooksToStore.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBooksToStore.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(addBooksToStore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice.actions;
