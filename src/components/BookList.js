import { useContext } from 'react';
import BooksContext from '../contest/Books';
import BookShow from './BookShow';
import React from 'react';

function BookList() {
  const { books } = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow  key={book.id} book={book} />
    );
  });

  return (
    <div className="book-list">
      {renderedBooks}
    </div>
  );
}

export default BookList;
