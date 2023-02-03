import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <nav
      className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          mb-5
          text-lg text-gray-700
          bg-white
        "
    >
      <div>
        <NavLink to="#">Crypto</NavLink>
      </div>

      <svg
        onClick={() => setIsOpen((prevState) => !prevState)}
        className="h-6 w-6 cursor-pointer md:hidden block"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className={`${
          isOpen ? "hidden" : ""
        } w-full md:flex md:items-center md:w-auto`}
        id="menu"
      >
        <ul
          className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
        >
          <li>
            <NavLink className="md:p-4 py-2 block hover:text-blue-500" to="#">
              Features
            </NavLink>
          </li>
          <li>
            <NavLink className="md:p-4 py-2 block hover:text-blue-500" to="#">
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink className="md:p-4 py-2 block hover:text-blue-500" to="#">
              Customers
            </NavLink>
          </li>
          <li>
            <NavLink className="md:p-4 py-2 block hover:text-blue-500" to="#">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink className="md:p-4 py-2 block hover:text-blue-500 " to="#">
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppNavbar;
