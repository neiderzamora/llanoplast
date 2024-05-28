"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Bars2Icon } from "@heroicons/react/24/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Categories() {
  return (
    <Menu as="div" className="relative">
      <div>
        <MenuButton className="relative flex rounded-full bg-orange-700 text-sm focus:outline-none focus:ring-2 focus:ring-orange-100 focus:ring-offset-2 focus:ring-offset-orange-700">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <div className="flex items-center justify-start text-orange-900 bg-orange-100 py-3 px-4 rounded-full gap-2">
            {" "}
            <Bars2Icon className="h-5 w-5 text-orange-800 inline-flex" />{" "}
            <span className="text-sm">Categorias</span>
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
        <MenuItems className="absolute z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Your Profile
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Settings
              </a>
            )}
          </MenuItem>
          <MenuItem>
            {({ focus }) => (
              <a
                href="#"
                className={classNames(
                  focus ? "bg-gray-100" : "",
                  "block px-4 py-2 text-sm text-gray-700"
                )}
              >
                Sign out
              </a>
            )}
          </MenuItem>
        </MenuItems>
      </Transition>
    </Menu>
  );
}
