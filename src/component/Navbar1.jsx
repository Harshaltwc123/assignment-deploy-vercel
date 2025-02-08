import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";

function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const [signinOpen, setSigninOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      <nav className="bg-white px-9 border-b shadow-lg fixed top-0 left-0 right-0 z-20">
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
              <Link to="/search">
              <IoSearch className="h-6 w-9" />
              </Link>
            </li>
            <ul className="flex gap-2">
              <li>
                <button
                  onClick={() => setSigninOpen(true)}
                  className="bg-black text-white px-4 py-1 rounded-lg font-medium"
                >
                  SIGN IN
                </button>
                {signinOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                      <Signin />
                      <button
                        onClick={() => setSigninOpen(false)}
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={() => setSignupOpen(true)}
                  className="bg-black text-white px-4 py-1 rounded-lg font-medium"
                >
                  SIGN UP
                </button>
                {signupOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                      <Signup />
                      <button
                        onClick={() => setSignupOpen(false)}
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
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
                <button
                  onClick={() => setSigninOpen(true)}
                  className="bg-black text-white px-4 py-1 rounded-lg font-medium"
                >
                  SIGN IN
                </button>
                {signinOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                      <Signin />
                      <button
                        onClick={() => setSigninOpen(false)}
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <button
                  onClick={() => setSignupOpen(true)}
                  className="bg-black text-white px-4 py-1 rounded-lg font-medium"
                >
                  SIGN UP
                </button>
                {signupOpen && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                      <Signup />
                      <button
                        onClick={() => setSignupOpen(false)}
                        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </ul>
        )}
      </nav>
    </>
  );
}

export default Navbar1;
