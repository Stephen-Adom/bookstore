/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../model/Book.model';
import { addBooksToStore, fetchBooks } from '../redux/books/bookThunks';

const defaultBookValues = {
  title: '',
  author: '',
};

const BookForm = () => {
  const [bookForm, setBookForm] = useState(defaultBookValues);
  const { error } = useSelector((state) => state.books);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const dispatch = useDispatch();
  const timerRef = useRef();

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

  useEffect(() => {
    if (error) {
      setShowError(true);

      timerRef.current = setTimeout(() => {
        setShowError(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timerRef);
    };
  }, [error]);

  useEffect(() => {
    if (showSuccess) {
      timerRef.current = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timerRef);
    };
  }, [showSuccess]);

  const submitNewBook = (e) => {
    e.preventDefault();
    if (bookForm.title && bookForm.author) {
      const newBook = new Book('', bookForm.title, bookForm.author);
      dispatch(addBooksToStore({
        item_id: newBook.id,
        title: newBook.title,
        author: newBook.author,
        category: newBook.category,
      })).then(() => {
        setShowSuccess(true);
        dispatch(fetchBooks());
      });
      resetForm(e);
    }
  };

  return (
    <div className="w-full p-4 mt-5 book-form">
      <h1 className="text-lg font-semibold text-gray-400">ADD NEW BOOK</h1>
      <form onSubmit={submitNewBook} className="flex flex-col items-center justify-between md:flex-row gap-x-5 gap-y-5">
        <div className="form-group w-full lg:w-[55%]">
          <input type="text" className="form-control" id="title" name="title" placeholder="Book title" onChange={(e) => handleChange(e)} required />
        </div>

        <div className="form-group w-full lg:w-[25%]">
          <input type="text" className="form-control" id="author" name="author" placeholder="Author" onChange={(e) => handleChange(e)} required />
        </div>

        <button type="submit" className="submit-btn border-2 bg-primaryBlue border-primaryBlue hover:bg-blue-700 hover:border-blue-700 text-white px-5 py-3 w-full lg:w-[20%]">ADD BOOK</button>
      </form>
      {
        showError && <h3 className="mt-3 text-lg text-center text-red-700">{ error && error.message}</h3>
      }

      {
        showSuccess && <h3 className="mt-3 text-lg text-center text-green-500">New Book Created</h3>
      }

    </div>
  );
};

export default BookForm;
