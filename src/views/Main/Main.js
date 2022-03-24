import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div>
      <h3>
        Checkout everything the library has to offer! See our <Link to='/books'>catalog</Link> to learn more.
      </h3>
    </div>
  );
}
