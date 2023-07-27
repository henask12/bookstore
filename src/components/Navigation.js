import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Home from './Home';
import Categories from './Categories';

const Navigation = () => (
  <Router>
    <nav className="bg-white-800 py-4 border border-white-100 rounded-lg shadow-sm">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 2xl:px-32 flex flex-col sm:flex-row justify-between items-center">
        <div className="logo flex items-center">
          <span
            className="text-blue-500 font-bold text-xl hidden sm:inline-block sm:text-xl"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '1.875rem',
              fontWeight: 'bold',
              color: '#0290ff',
            }}
          >
            BookStore CMS
          </span>
          <ul className="flex text-black font-bold ml-8 pt-2">
            <li>
              <Link
                to="/"
                className="text-black hover:text-teal-200"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1.153rem',
                  fontWeight: 'normal',
                  letterSpacing: '1.9px',
                  color: '#121212',
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="text-black hover:text-teal-200 ml-8"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '1.153rem',
                  fontWeight: 'normal',
                  letterSpacing: '1.9px',
                  color: '#121212',
                }}
              >
                Categories
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-4 sm:mt-0 hidden sm:inline-block sm:text-xl">
          <img
            className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            style={{
              width: '4.113rem',
              height: '4.113rem',
              padding: '0.875rem',
            }}
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
    </nav>

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/catagories" element={<Categories />} />
    </Routes>
  </Router>
);

export default Navigation;
