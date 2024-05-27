// components/SearchNavbar.js
import React from "react";

const SearchNavbar = () => {
  return (
    <div className="">
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full max-w-lg px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchNavbar;
