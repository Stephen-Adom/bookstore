import React from 'react';
import { useDispatch } from 'react-redux';
import { bookPropType } from '../model/Book.types';
import { deleteBook, fetchBooks } from '../redux/books/bookThunks';

const BookSummary = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col book-info w-full lg:w-[50%]">
      <p className="font-bold text-gray-400 category font-sm">{book.category}</p>
      <h1 className="text-xl font-bold">{book.title}</h1>
      <p className="text-sm font-light tracking-wide text-paleBlue">{book.author}</p>
      <div className="flex items-center gap-3 mt-3 divide-x-2 book-actions">
        <button type="button" className="text-paleBlue">Comments</button>
        <button
          type="button"
          className="px-4 text-paleBlue"
          onClick={() => {
            dispatch(deleteBook(book.id)).then(() => {
              dispatch(fetchBooks());
            });
          }}
        >
          Remove

        </button>
        <button type="button" className="px-4 text-paleBlue">Edit</button>
      </div>
    </div>
  );
};

BookSummary.propTypes = { ...bookPropType };

export default BookSummary;
