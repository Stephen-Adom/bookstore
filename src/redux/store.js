import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './bookSlice/bookSlice';

const store = configureStore({
  reducer: {
    books: bookSlice,
  },
});

export default store;
