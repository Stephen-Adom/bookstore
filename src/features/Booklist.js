/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BookItem, BookForm } from '../components';

const allBooks = [
  {
    id: 1,
    title: 'The Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
    completed: '64%',
    current_chapter: 'Chapter 17',
  },
  {
    id: 2,
    title: 'Dune',
    category: 'Action',
    author: 'Frank Herbert',
    completed: '8%',
    current_chapter: 'Chapter 3: *A Lesson Learned*',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    category: 'Economy',
    author: 'Suzanne Collins',
    completed: '0%',
    current_chapter: 'Introduction',
  },
];

const Booklist = () => {
  const [books, setBooks] = useState(allBooks);

  const addNewBook = (book) => {
    setBooks((prevState) => [...prevState, book]);
  };

  return (
    <section id="book-list" className="flex items-center flex-col w-full gap-y-4">
      {
      books.length && (
        books.map((book) => <BookItem key={book.id} book={book} />)
      )
    }

      <BookForm addNewBook={addNewBook} />
    </section>
  );
};

export default Booklist;
