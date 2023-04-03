import { createSlice } from '@reduxjs/toolkit';
import fetchBooks from './thunks';

const initialState = {
  books: [
    {
      id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
      completed: '0%',
      currentChapter: 'Introduction',
    },
    {
      id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
      completed: '0%',
      currentChapter: 'Introduction',
    },
    {
      id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
      completed: '0%',
      currentChapter: 'Introduction',
    },
  ],
  loading: false,
  error: null,
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
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.books = action.payload;
    });
    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default bookSlice.reducer;
export const { addBook, removeBook } = bookSlice.actions;
