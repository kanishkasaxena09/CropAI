import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="text-xl text-gray-600 mt-4">Maaf kijiye, ye page nahi mila!</p>
      <Link to="/" className="mt-6 text-primary underline font-medium">
        Wapas Home par jayein
      </Link>
    </div>
  );
};

export default NotFound;