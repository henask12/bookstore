import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  RESET_VALUE, addBook, fetchBooks, removeBook,
} from '../redux/books/booksSlice';
import './booklist.css';

const BookList = () => {
  const appId = 'or5N5ySZmibmmvlVJfIo';
  const {
    books, loading, error, success,
  } = useSelector((state) => state.books);
  // console.log(books, loading, error, success, message);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const closeAddDialog = () => {
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  useEffect(() => {
    // Fetch the list of books from the server when the component mounts
    dispatch(fetchBooks(appId));
  }, [dispatch]);

  /* eslint-disable camelcase */
  const booksArray = Object.keys(books).map((item_id) => ({
    ...books[item_id][0],
    item_id,
  }));

  const handleAddBook = () => {
    const newBook = {
      item_id: uuidv4(), // Generating a unique ID for the new book
      title,
      author,
      category,
    };

    // dispatch(addBook(newBook));
    dispatch(addBook({ appId, book: newBook }));

    closeAddDialog();
    RESET_VALUE();
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook({ appId, itemId }));
  };

  useEffect(() => {
    if (success || error) {
      const timeoutId = setTimeout(() => {
        dispatch(fetchBooks(appId));
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
    return undefined;
  }, [dispatch, success, error, appId]);

  if (loading) {
    return (
      <div className="circular flex items-center">
        <div className="inner" />
        <div className="outer" />
        <div className="numb">
          <div className="numb-title">Loading</div>
        </div>
        <div className="circle">
          <div className="zero-dot">
            <span />
          </div>
          <div className="dot">
            <span />
          </div>
          <div className="bar left">
            <div className="left progress" />
          </div>
          <div className="bar right">
            <div className="right progress" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 bg-gray-200">

      <div className="">
        {booksArray?.map((book) => (
          <div key={book.item_id} className="card border bg-white border-gray-300 rounded-lg shadow-md p-4 w-11/12 flex justify-between mx-auto mt-6">
            {/* Left Section */}
            <div className="ml-4">
              <h2 className="text-lg text-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>{book.category}</h2>
              <h3 className="text-xl text-black-600 font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>{book.title}</h3>
              <p className="text-blue-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>{book.author}</p>
              <div className="flex items-center">
                <p className="text-blue-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>Comments</p>
                <span className="text-gray-300 ml-2">|</span>
                <span
                  className="text-blue-400 px-4 py-2 cursor-pointer"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                  onClick={() => handleRemoveBook(book.item_id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleRemoveBook(book.item_id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  Remove
                </span>
                {' '}
                <span className="text-gray-300 ml-2">|</span>
                <span className="text-blue-400 px-4 py-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>Edit</span>
              </div>
            </div>

            {/* Middle Section */}
            <div className="flex items-center">
              <div className="circular">
                <div className="inner" />
                <div className="outer" />
                <div className="numb">
                  <div className="text-progress" style={{ fontFamily: 'Montserrat, sans-serif' }}>90%</div>
                  <div className="numb-title text-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>Completed</div>
                </div>
                <div className="circle">
                  <div className="zero-dot">
                    <span />
                  </div>
                  <div className="dot">
                    <span />
                  </div>
                  <div className="bar left">
                    <div className="left progress" />
                  </div>
                  <div className="bar right">
                    <div className="right progress" />
                  </div>
                </div>
              </div>
            </div>

            {/* Separator */}
            <span className="separator text-gray-400">|</span>

            {/* Right Section */}
            <div>
              <h3 className="text-m text-gray-400" style={{ fontFamily: 'Montserrat, sans-serif' }}>CURRENT CHAPTER</h3>
              <p className="text-black-600 text-lg" style={{ fontFamily: 'Montserrat, sans-serif' }}>Chapter 17</p>
              <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>UPDATE PROGRESS</button>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-lg  justify-between mx-auto mt-6 w-11/12 mb-6">
        <h2 className="text-xl text-gray-400 font-bold mb-4 ml-4 mt-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>ADD NEW BOOK</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 mb-2  border ml-6 w-full sm:w-80"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="p-2 mb-2 border mb-8 w-full sm:w-60"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 mb-2 border w-full sm:w-80 rounded-lg appearance-none ml-4"
        >
          <option value="">Select Category</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Romance">Romance</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg
            className="w-4 h-4 fill-current text-gray-400"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M14.293 8l2.147-2.146a.5.5 0 01.708.708L15.707 8l2.147 2.146a.5.5 0 01-.708.708L14.293 8zM10 16a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <button
          type="button"
          onClick={handleAddBook}
          className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0 ml-6 w-full sm:w-80 "
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default BookList;
