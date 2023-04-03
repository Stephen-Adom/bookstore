import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const KEY = 'xNvpxGb5tLWLY7XfTi9Z';

const fetchBooks = createAsyncThunk('books/fetchBooks', () => axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${KEY}/books`));

export default fetchBooks;
