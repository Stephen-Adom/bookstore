import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Book from '../model/Book.model';
import { addBook } from '../redux/books/bookSlice';

const defaultBookValues = {
  title: '',
  author: '',
};

const BookForm = () => {
  const [bookForm, setBookForm] = useState(defaultBookValues);
  const dispatch = useDispatch();

  const resetForm = (e) => {
    setBookForm(defaultBookValues);
    e.target.reset();
  };

  const handleChange = (e) => {
    setBookForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitNewBook = (e) => {
    e.preventDefault();
    if (bookForm.title && bookForm.author) {
      const newBook = new Book(bookForm.title, bookForm.author);
      dispatch(addBook(newBook));
      resetForm(e);
    }
  };

  return (
    <div className="w-full mt-5 book-form">
      <h1 className="text-lg">ADD NEW BOOK</h1>
      <form onSubmit={submitNewBook} className="flex items-center justify-between gap-x-5">
        <div className="form-group w-[55%]">
          <input type="text" className="form-control" id="title" name="title" placeholder="Book title" onChange={(e) => handleChange(e)} required />
        </div>

        <div className="form-group w-[25%]">
          <input type="text" className="form-control" id="author" name="author" placeholder="Author" onChange={(e) => handleChange(e)} required />
        </div>

        <button type="submit" className="submit-btn border-2 border-black px-5 py-3 w-[20%]">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
