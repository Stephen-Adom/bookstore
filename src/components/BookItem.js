import React from 'react';
import BookSummary from './BookSummary';
import BookAnalysis from './BookAnalysis';

const BookItem = () => (
  <section id="book-item" className="border-2 p-4 flex items-center justify-between w-full">
    <BookSummary />
    <BookAnalysis />
  </section>
);

export default BookItem;
