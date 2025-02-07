import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <nav className="bg-white px-9 border-b shadow-lg">
        <ul className="flex justify-between items-center">
          <div className="flex flex-col gap-0 text-2xl">
            <Link to="/">
              <h1 className="font-bold">hubnex</h1>
              <h1>invest</h1>
            </Link>
          </div>
          <ul className="hidden lg:flex w-full justify-between pl-16">
            <li>
              <Link
                to="/"
                className={`${location.pathname === "/" && "font-bold"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/companies"
                className={`${
                  location.pathname === "/companies" && "font-bold"
                }`}
              >
                Companies
              </Link>
            </li>
            <li>
              <Link
                to="/whatweoffer"
                className={`${
                  location.pathname === "/whatweoffer" && "font-bold"
                }`}
              >
                What we offer?
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className={`${location.pathname === "/aboutus" && "font-bold"}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/hubnexeducate"
                className={`${
                  location.pathname === "/hubnexeducate" && "font-bold"
                }`}
              >
                HubnexEducate
              </Link>
            </li>
            <li>
              <Link
                to="getintouch"
                className={`${
                  location.pathname === "/getintouch" && "font-bold"
                }`}
              >
                Get in Touch
              </Link>
            </li>
            <li>
              <IoSearch className="h-6 w-9" />
            </li>
            <ul className="flex gap-2">
              <li>
                <button className="bg-black text-white px-4 py-1 rounded-lg font-medium">
                  SIGN IN
                </button>
              </li>
              <li>
                <button className="bg-black text-white px-4 py-1 rounded-lg font-medium">
                  SIGN UP
                </button>
              </li>
            </ul>
          </ul>
          <button
            className="lg:hidden text-black text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </ul>

        {isOpen && (
          <ul className="lg:hidden flex flex-col w-full justify-between items-center gap-2 pb-4">
            <li>
              <Link
                to="/"
                className={`${location.pathname === "/" && "font-bold"}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/companies"
                className={`${
                  location.pathname === "/companies" && "font-bold"
                }`}
              >
                Companies
              </Link>
            </li>
            <li>
              <Link
                to="/whatweoffer"
                className={`${
                  location.pathname === "/whatweoffer" && "font-bold"
                }`}
              >
                What we offer?
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className={`${location.pathname === "/aboutus" && "font-bold"}`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/hubnexeducate"
                className={`${
                  location.pathname === "/hubnexeducate" && "font-bold"
                }`}
              >
                HubnexEducate
              </Link>
            </li>
            <li>
              <Link
                to="getintouch"
                className={`${
                  location.pathname === "/getintouch" && "font-bold"
                }`}
              >
                Get in Touch
              </Link>
            </li>
            <ul className="flex gap-2">
              <li>
                <button className="bg-black text-white px-4 py-1 rounded-lg font-medium">
                  SIGN IN
                </button>
              </li>
              <li>
                <button className="bg-black text-white px-4 py-1 rounded-lg font-medium">
                  SIGN UP
                </button>
              </li>
            </ul>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar1;
