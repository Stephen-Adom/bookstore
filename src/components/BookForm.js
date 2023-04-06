/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../model/Book.model';
import { addBooksToStore, fetchBooks } from '../redux/books/bookThunks';
import useToast from '../hooks/useToast';

const defaultBookValues = {
  title: '',
  author: '',
};

const BookForm = () => {
  const [bookForm, setBookForm] = useState(defaultBookValues);
  const toastRef = useRef(null);
  const { error } = useSelector((state) => state.books);
  const [showToast] = useToast(toastRef);
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

  useEffect(() => {
    if (error) {
      showToast('error', 'Add New Book', error.message);
    }
  }, [error, showToast]);

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
        showToast('success', 'Add New Book', 'New Book Added');
        dispatch(fetchBooks());
      });
      resetForm(e);
    }
  };

  return (
    <div className="w-full py-5 mt-5 book-form">
      <Toast ref={toastRef} />
      <h1 className="text-[1.25rem] font-bold text-[#888] font-montserrat">ADD NEW BOOK</h1>
      <form onSubmit={submitNewBook} className="flex flex-col items-center mt-3 md:flex-row gap-x-5 gap-y-5">
        <div className="form-group w-full lg:w-[41.5rem]">
          <input type="text" className="form-control" id="title" name="title" placeholder="Book title" onChange={(e) => handleChange(e)} required />
        </div>

        <div className="form-group w-full lg:w-[17.813rem]">
          <input type="text" className="form-control" id="author" name="author" placeholder="Author" onChange={(e) => handleChange(e)} required />
        </div>

        <button type="submit" className="add-book-btn">ADD BOOK</button>
      </form>
    </div>
  );
};

export default BookForm;
