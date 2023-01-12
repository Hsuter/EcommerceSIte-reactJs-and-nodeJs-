import React from "react";

const NotFound = () => {
  return (
    <div className="container flex h-screen justify-center items-center">
      <div
        className="flex flex-col
      font-serif  items-center text-gray-600"
      >
        <h2 className="text-5xl">404</h2>
        <p className="text-2xl">Page not found</p>
      </div>
    </div>
  );
};

export default NotFound;
