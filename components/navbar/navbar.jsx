import React from "react";
import SearchNavbar from "./search_navbar";
import Categories from "./categories";


export default function Navbar() {
  return (
    <div className="bg-white p-4 shadow-md max-w-full mx-auto flex justify-center items-center gap-2">
      <SearchNavbar />
      <Categories/>
    </div>
  );
}
