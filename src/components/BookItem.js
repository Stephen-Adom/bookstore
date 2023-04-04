import React from 'react';
import BookSummary from './BookSummary';
import BookAnalysis from './BookAnalysis';
import { bookPropType } from '../model/Book.types';

const BookItem = (props) => {
  const { book } = props;

  return (
    <section id="book-item" className="flex flex-col items-center justify-between w-full p-4 border-2 sm:flex-col md:flex-row">
      <BookSummary book={book} />
      <BookAnalysis book={book} />
    </section>
  );
};

BookItem.propTypes = { ...bookPropType };

export default BookItem;
