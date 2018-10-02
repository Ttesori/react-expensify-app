import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>404: The page is not found</p>
    <p>
      <Link to="/">Go home</Link>
    </p>
  </div>
);

export default NotFoundPage;
