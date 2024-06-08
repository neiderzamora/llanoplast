"use client";

import { useState } from "react";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchNavbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(search);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form
      className="flex justify-start items-center w-full max-w-md bg-white rounded-full border border-[#6c6d70]/50 gap-2 px-4 py-0.5 text-black"
      onSubmit={handleSearch}
    >
      <MagnifyingGlassIcon className="h-6 w-6 ml-2 text-[#6c6d70]/50" />
      <input
        type="text"
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Buscar..."
        className="w-full py-2.5 focus:outline-none focus:ring-0 text-[#6c6d70]"
      />
      
    </form>
  );
};

export default SearchNavbar;
