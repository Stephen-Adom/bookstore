import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './books/bookSlice';
import categoriesSlice from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    books: bookSlice,
    categories: categoriesSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
