import React from 'react';
import {
  BrowserRouter as Link,
} from 'react-router-dom';

function Navigation() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="logo">
          <span className="text-white font-bold text-xl">Math Magicians</span>
        </div>
        <ul className="flex space-x-4 text-white font-bold">
          <li>
            <Link to="/" className="text-white hover:text-teal-200">Home</Link>
          </li>
          <li>
            <Link to="/categories" className="text-white hover:text-teal-200">
              Categories
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
