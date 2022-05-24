import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <div>
        <h1>Library Catalog</h1>
      </div>
      <div>
        <ul>
          <li>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/books'>
              Books
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
