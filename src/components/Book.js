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
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">
        Author:
        {author}
      </p>
      <button
        type="button"
        className="bg-red-500 text-white px-4 py-2 mt-2 rounded-md"
        onClick={handleDelete}
      >
        Delete
      </button>
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
