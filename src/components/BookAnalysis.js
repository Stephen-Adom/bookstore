import React from 'react';
import { bookPropType } from '../model/Book.types';

const BookAnalysis = (props) => {
  const { book } = props;

  return (
    <div className="book-analysis flex items-center justify-between w-full lg:w-[50%] mt-3">
      <div>
        <h1 className="text-2xl">{book.completed}</h1>
        <p>Completed</p>
      </div>
      <div className="flex flex-col gap-y-2 w-[60%] text-center md:text-left">
        <p className="text-gray-500">CURRENT CHAPTER</p>
        <p>{book.current_chapter}</p>
        <button type="button" className="px-3 py-1 border-2">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookAnalysis.propTypes = { ...bookPropType };

export default BookAnalysis;
