import React from 'react';
import PropTypes from 'prop-types';

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

BookSummary.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
    completed: PropTypes.string,
    current_chapter: PropTypes.string,
  }).isRequired,
};

export default BookSummary;
