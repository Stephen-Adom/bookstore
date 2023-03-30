import React from 'react';
import PropTypes from 'prop-types';
import BookSummary from './BookSummary';
import BookAnalysis from './BookAnalysis';

const BookItem = (props) => {
  const { book } = props;

  return (
    <section id="book-item" className="border-2 p-4 flex items-center justify-between w-full">
      <BookSummary book={book} />
      <BookAnalysis book={book} />
    </section>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
    author: PropTypes.string,
    completed: PropTypes.string,
    current_chapter: PropTypes.string,
  }).isRequired,
};

export default BookItem;
