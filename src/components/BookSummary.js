import React, { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { useDispatch } from 'react-redux';
import { bookPropType } from '../model/Book.types';
import { deleteBook, fetchBooks } from '../redux/books/bookThunks';
import useToast from '../hooks/useToast';

const BookSummary = (props) => {
  const { book } = props;
  const dispatch = useDispatch();
  const toastRef = useRef(null);
  const [showToast] = useToast(toastRef);

  return (
    <>
      <Toast ref={toastRef} />
      <div className="flex flex-col book-info w-full lg:w-[50%]">
        <p className="text-[0.875rem] font-bold text-gray-400 category font-montserrat">{book.category}</p>
        <h1 className="text-[1.375rem] font-bold font-roboto">{book.title}</h1>
        <p className="text-[0.875rem] font-light tracking-wide text-paleBlue font-roboto">{book.author}</p>
        <div className="flex items-center gap-3 mt-3 divide-x-2 book-actions">
          <button type="button" className="text-paleBlue text-[0.875rem]">Comments</button>
          <button
            type="button"
            className="px-4 text-paleBlue text-[0.875rem]"
            onClick={() => {
              dispatch(deleteBook(book.id)).then(() => {
                showToast('info', 'Remove Book', `${book.title} removed`);
                dispatch(fetchBooks());
              });
            }}
          >
            Remove

          </button>
          <button type="button" className="px-4 text-paleBlue text-[0.875rem]">Edit</button>
        </div>
      </div>
    </>

  );
};

BookSummary.propTypes = { ...bookPropType };

export default BookSummary;
