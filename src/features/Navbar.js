import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="w-full py-5 bg-white border md:py-5 lg:py-5 navbar">
    <div className="container-fluid flex items-center w-[90%] lg:w-[80%] mx-auto">
      <Link
        className="navbar-brand text-[1.5rem] md:text-[1.5rem] font-semibold text-primaryBlue"
        to="/"
      >
        Bookstore CMS
      </Link>
      <ul className="navbar-nav me-auto items-center ml-[50px] gap-10 hidden sm:hidden md:flex lg:flex">
        <li className="nav-item">
          <NavLink
            className="text-gray-500 nav-link"
            aria-current="page"
            to="/"
          >
            BOOKS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="text-gray-500 nav-link" to="categories">
            CATEGORIES
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center ml-auto auth-section gap-x-3">
        <div className="items-center justify-center hidden w-12 h-12 border border-gray-300 rounded-full lg:w-14 lg:h-14 auth-info sm:hidden md:flex lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#0290ff"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#0290ff"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>

        <button
          type="button"
          className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full sm:flex md:hidden lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
