import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BookItem, BookForm } from '../components';
import { fetchBooks } from '../redux/books/bookThunks';

const Booklist = () => {
  const [AllBooks, setAllBooks] = useState([]);
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    setAllBooks(books);
  }, [books]);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <>
      <section id="book-list" className="flex items-center flex-col w-full gap-y-4 max-h-[600px] overflow-y-auto px-3 py-2">
        {
          AllBooks.length ? (
            AllBooks.map((book) => <BookItem key={book.id} book={book} />)
          ) : <h2 className="font-bold">No Book Available!</h2>
    }

      </section>
      <BookForm />
    </>

  );
};

export default Booklist;
