import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Bookstore CMS</Link>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
