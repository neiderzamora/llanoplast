// components/SearchNavbar.js
import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchNavbar = () => {
  return (
    <div className="flex justify-start items-center w-full max-w-md bg-white rounded-full border border-orange-800/50 gap-2 px-4">
      <MagnifyingGlassIcon className="h-6 w-6 ml-2 text-orange-800/50" />
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full py-3 focus:outline-none focus:ring-0"
      />
    </div>
  );
};

export default SearchNavbar;
