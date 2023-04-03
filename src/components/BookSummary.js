import React from 'react';
import { useDispatch } from 'react-redux';
import { bookPropType } from '../model/Book.types';
import { removeBook } from '../redux/books/bookSlice';

const BookSummary = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col book-info">
      <p className="category">{book.category}</p>
      <h1 className="text-xl font-bold">{book.title}</h1>
      <p className="text-sm text-gray-400">{book.author}</p>
      <div className="flex items-center gap-3 mt-3 book-actions">
        <button type="button">Comments</button>
        <button type="button" onClick={() => dispatch(removeBook(book.id))}>Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>
  );
};

BookSummary.propTypes = { ...bookPropType };

export default BookSummary;
