import React from 'react';
import { bookPropType } from '../model/Book.types';

const BookAnalysis = (props) => {
  const { book } = props;

  return (
    <div className="book-analysis flex items-center justify-between w-full lg:w-[50%] mt-3">
      <div>
        <h1 className="text-4xl font-light">{book.completed}</h1>
        <p className="font-light text-gray-400">Completed</p>
      </div>
      <div className="flex flex-col gap-y-2 w-[60%] text-center md:text-left">
        <p className="text-gray-400">CURRENT CHAPTER</p>
        <p className="font-light">{book.current_chapter}</p>
        <button type="button" className="w-[45%] mt-4 font-light px-3 py-1 text-white border-2 bg-primaryBlue border-primaryBlue hover:bg-blue-700 hover:border-blue-700">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookAnalysis.propTypes = { ...bookPropType };

export default BookAnalysis;
