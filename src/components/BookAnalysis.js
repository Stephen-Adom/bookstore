import React from 'react';

const BookAnalysis = () => (
  <div className="book-analysis flex items-center justify-between w-[50%]">
    <div>
      <h1 className="text-2xl">64%</h1>
      <p>Completed</p>
    </div>
    <div>
      <p className="text-gray-500">CURRENT CHAPTER</p>
      <p>Chapter 17</p>
      <button type="button" className="border-2 px-3 py-1">UPDATE PROGRESS</button>
    </div>
  </div>
);

export default BookAnalysis;
