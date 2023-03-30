/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { newBookPropType } from '../model/Book.types';
import Book from '../model/Book.model';

const defaultBookValues = {
  title: '',
  author: '',
};

const BookForm = (props) => {
  const [bookForm, setBookForm] = useState(defaultBookValues);
  const { addNewBook } = props;

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
      addNewBook(newBook);
      resetForm(e);
    }
  };

  return (
    <div className="book-form w-full mt-5">
      <h1 className="text-lg">ADD NEW BOOK</h1>
      <form onSubmit={submitNewBook} className="flex items-center justify-between gap-x-5">
        <div className="form-group w-[55%]">
          <input type="text" className="form-control" id="title" name="title" placeholder="Book title" onChange={(e) => handleChange(e)} required />
        </div>

        <div className="form-group w-[25%]">
          <select className="form-control" defaultValue="" id="author" name="author" onChange={(e) => handleChange(e)} required>
            <option value="">Author</option>
            <option value="Suzanne Collins">Suzanne Collins</option>
            <option value="Frank Herbert">Frank Herbert</option>
          </select>
        </div>

        <button type="submit" className="submit-btn border-2 border-black px-5 py-3 w-[20%]">ADD BOOK</button>
      </form>
    </div>
  );
};

BookForm.propTypes = { ...newBookPropType };

export default BookForm;
