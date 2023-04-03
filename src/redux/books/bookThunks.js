import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const KEY = 'xNvpxGb5tLWLY7XfTi9Z';
const API_BASE = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps';

const fetchBooks = createAsyncThunk('books/fetchBooks', () => axios.get(`${API_BASE}/${KEY}/books`));

const addBooksToStore = createAsyncThunk('books/addBooks', async (book, { rejectWithValue, fulfillWithValue }) => {
  try {
    const response = await axios.post(`${API_BASE}/${KEY}/books`, book);
    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue({ ...error.response.data.error });
  }
});

const deleteBook = createAsyncThunk('books/deleteBookFromDB', async (itemId, { rejectWithValue, fulfillWithValue }) => {
  try {
    const response = await axios.delete(`${API_BASE}/${KEY}/books/${itemId}`);
    return fulfillWithValue(response);
  } catch (error) {
    return rejectWithValue(error.response.data.error);
  }
});

export { addBooksToStore, fetchBooks, deleteBook };
