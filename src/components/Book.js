import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Book = ({ title, author, onDelete }) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = () => {
    setIsDeleted(true);
    onDelete();
  };

  return (
    !isDeleted && (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-900 shadow-md rounded-md p-4 mb-4 text-center" style={{ width: '33vw', height: '35vh' }}>
          <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
          <p className="text-white pt-5">
            Author:
            {' '}
            {author}
          </p>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md mt-10"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    )
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
