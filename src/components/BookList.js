import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeBook({ id }));
  };

  const handleAddBook = () => {
    const newBook = {
      id: Date.now(),
      title: 'New Book Title',
      author: 'New Book Author',
    };

    dispatch(addBook(newBook));
  };

  const handleRemoveBook = () => {
    if (books.length > 0) {
      const lastBookId = books[books.length - 1].id;
      dispatch(removeBook({ id: lastBookId }));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-5 text-gray-800">Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            onDelete={() => handleDelete(book.id)}
          />
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <button
          type="button"
          onClick={handleAddBook}
          className="bg-green-500 text-white px-4 py-2 rounded-md mt-2 mr-2"
        >
          Add New Book
        </button>
        {books.length > 0 && (
          <button
            type="button"
            onClick={handleRemoveBook}
            className="bg-red-500 text-white px-4 py-2 rounded-md mt-2"
          >
            Remove Last Book
          </button>
        )}
      </div>
    </div>
  );
};

export default BookList;
