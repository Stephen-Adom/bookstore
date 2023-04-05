import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { bookPropType } from '../model/Book.types';

const BookAnalysis = (props) => {
  const { book } = props;
  const [percentage] = useState(66);

  return (
    <div className="book-analysis flex items-center justify-between w-full lg:w-[50%] mt-3 gap-x-4">
      <div className="flex flex-col items-center md:flex-row gap-x-4">
        <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]">
          <CircularProgressbar value={percentage} />
        </div>
        <div className="mt-1 text-center lg:text-left lg:mt-0">
          <h1 className="text-3xl font-light lg:text-2xl">{book.completed}</h1>
          <p className="text-xs font-light text-gray-400">Completed</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 w-[60%] text-center md:text-left">
        <p className="text-gray-400">CURRENT CHAPTER</p>
        <p className="font-light">{book.current_chapter}</p>
        <button type="button" className="w-full lg:w-[80%] mt-1 lg:mt-4 font-light px-3 py-1 text-white border-2 bg-primaryBlue border-primaryBlue hover:bg-blue-700 hover:border-blue-700 text-sm">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookAnalysis.propTypes = { ...bookPropType };

export default BookAnalysis;
