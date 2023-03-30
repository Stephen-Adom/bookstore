import React from 'react';

const BookSummary = () => (
  <div className="book-info">
    <p className="category">Action</p>
    <h1 className="font-bold text-2xl">The Hunger Games</h1>
    <p className="text-gray-400 text-sm">Suzanne Collins</p>
    <div className="book-actions flex items-center gap-3">
      <a href="comment">Comments</a>
      <a href="remove">Remove</a>
      <a href="edit">Edit</a>
    </div>
  </div>
);

export default BookSummary;
