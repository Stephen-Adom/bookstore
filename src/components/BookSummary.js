import React from 'react';
import { bookPropType } from '../model/Book.types';

const BookSummary = (props) => {
  const { book } = props;
  return (
    <div className="book-info flex flex-col">
      <p className="category">{book.category}</p>
      <h1 className="font-bold text-xl">{book.title}</h1>
      <p className="text-gray-400 text-sm">{book.author}</p>
      <div className="book-actions flex items-center gap-3 mt-3">
        <a href="comment">Comments</a>
        <a href="remove">Remove</a>
        <a href="edit">Edit</a>
      </div>
    </div>
  );
};

BookSummary.propTypes = { ...bookPropType };

export default BookSummary;
