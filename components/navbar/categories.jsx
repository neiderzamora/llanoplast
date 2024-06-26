"use client";

import {
  Menu,
  Transition,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars2Icon } from "@heroicons/react/24/solid";
import { CATEGORIES } from "@/utils/categories"; 
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Categories = ({ filterProductsByCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    filterProductsByCategory(category);
  };

  return (
    <Menu as="div" className="relative">
      <div>
        <MenuButton className="relative flex rounded-full bg-[#5db551] text-sm focus:outline-none focus:ring-2 focus:ring-orange-100 focus:ring-offset-2 focus:ring-offset-[#5db551]/50">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <div className="flex items-center justify-start text-white bg-[#5db551] py-3 px-4 rounded-full gap-1">
            <Bars2Icon className="h-5 w-5 text-white inline-flex" />
            <span className="text-sm font-semibold">Categorias</span>
          </div>
        </MenuButton>
      </div>
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute z-10 mt-2 -ml-12 lg:mr-0 w-48 max-h-[20rem] lg:max-h-[30rem] overflow-y-auto origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <MenuItem>
            <p
              onClick={() => handleCategorySelect("Todos")}
              className={classNames(
                selectedCategory === "Todos" ? "bg-gray-100" : "",
                "block px-4 py-2 text-sm font-semibold text-gray-700 bg-[#cc2229]/25 cursor-pointer"
              )}
            >
              Mostrar Todos
            </p>
          </MenuItem>
          {CATEGORIES.map((category) => (
            <MenuItem key={category}>
              <p
                onClick={() => handleCategorySelect(category)}
                className={classNames(
                  selectedCategory === category ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-[#cc2229]/80 hover:text-white hover:scale-105"
                )}
              >
                {category}
              </p>
            </MenuItem>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};

export default Categories;
