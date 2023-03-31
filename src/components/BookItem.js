import React from 'react';
import BookSummary from './BookSummary';
import BookAnalysis from './BookAnalysis';
import { bookPropType } from '../model/Book.types';

const BookItem = (props) => {
  const { book } = props;

  return (
    <section id="book-item" className="border-2 p-4 flex items-center justify-between w-full">
      <BookSummary book={book} />
      <BookAnalysis book={book} />
    </section>
  );
};

BookItem.propTypes = { ...bookPropType };

export default BookItem;
