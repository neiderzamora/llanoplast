import React from "react";
import SearchNavbar from "./search_navbar";
import Categories from "./categories";
import Image from "next/image";

export default function Navbar({ handleSearch, filterProductsByCategory }) {
  return (
    <nav className="bg-[#2466af] mx-auto">
      <div className="flex justify-center py-4 lg:hidden">
      <Image
        height={500}
        width={500}
        alt="logo"
        className="lg:block h-24 w-24 lg:h-16 lg:w-16 rounded-full bg-white p-1 text-center"
        src="https://llanoplast.com/logo.webp"
        unoptimized
      />
      </div>
      <div className="py-4 px-2 lg:border-t-0 border-t border-white/50 max-w-full mx-auto flex justify-center items-center gap-2">
      <Image
        height={500}
        width={500}
        alt="logo"
        className="hidden lg:block h-24 w-24 lg:h-16 lg:w-16 rounded-full bg-white p-1 text-center"
        src="https://llanoplast.com/logo.webp"
        unoptimized
      />
        <SearchNavbar onSearch={handleSearch} />
        <Categories filterProductsByCategory={filterProductsByCategory} />
      </div>
    </nav>
  );
}
