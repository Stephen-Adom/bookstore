import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar bg-white w-full py-4 border-2">
    <div className="container-fluid flex items-center w-[80%] mx-auto">
      <Link className="navbar-brand text-[1.5rem]" to="/">Bookstore CMS</Link>
      <ul className="navbar-nav me-auto flex items-center ml-[50px] gap-3">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">BOOKS</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
