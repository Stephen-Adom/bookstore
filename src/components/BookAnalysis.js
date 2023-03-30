import React from 'react';
import { bookPropType } from '../model/Book.types';

const BookAnalysis = (props) => {
  const { book } = props;

  return (
    <div className="book-analysis flex items-center justify-between w-[50%]">
      <div>
        <h1 className="text-2xl">{book.completed}</h1>
        <p>Completed</p>
      </div>
      <div className="flex flex-col gap-y-2 w-[60%]">
        <p className="text-gray-500">CURRENT CHAPTER</p>
        <p>{book.current_chapter}</p>
        <button type="button" className="border-2 px-3 py-1">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookAnalysis.propTypes = { ...bookPropType };

export default BookAnalysis;
