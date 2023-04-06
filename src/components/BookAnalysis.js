import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { bookPropType } from '../model/Book.types';

const BookAnalysis = (props) => {
  const { book } = props;
  const [percentage] = useState(66);

  return (
    <div className="book-analysis flex items-center justify-between w-full lg:w-[50%] mt-3 gap-x-4 divide-x">
      <div className="flex flex-col items-center md:flex-row gap-x-4">
        <div className="w-[50px] h-[50px] lg:w-[80px] lg:h-[80px]">
          <CircularProgressbar value={percentage} styles={buildStyles({ backgroundColor: '#0290ff' })} />
        </div>
        <div className="mt-1 text-center lg:text-left lg:mt-0">
          <h1 className="text-3xl font-light lg:text-[2rem] font-montserrat text-[#121212]">{book.completed}</h1>
          <p className="text-[0.875rem] font-light text-gray-400 font-montserrat">Completed</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 w-[60%] text-center md:text-left pl-3 md:pl-10 lg:pl-16">
        <p className="text-gray-400 text-[0.813rem] font-light font-roboto">CURRENT CHAPTER</p>
        <p className="font-light font-roboto">{book.current_chapter}</p>
        <button type="button" className="update-progress-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookAnalysis.propTypes = { ...bookPropType };

export default BookAnalysis;
