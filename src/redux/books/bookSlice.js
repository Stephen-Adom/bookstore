import { createSlice } from '@reduxjs/toolkit';

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
