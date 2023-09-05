import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

const Header = () => {
  return (
    <header className="sticky top-1 md:h-[88px] w-full h-[56px] flex items-center z-10 bg-white lg:px-6 ">
      <div
        className="flex flex-1 items-center justify-between px-[36px] 
        md:px-[36px]"
      >
        {/* header left */}
        <div className="flex items-center gap-[16px] md:gap-[30px]">
          {/* menu */}
          <Link className="flex items-center gap-4" href="/">
            <Image
              src="/logo.svg"
              className="h-12 w-12"
              alt="logo"
              width={150}
              height={150}
            />
            <span className="hidden md:inline-block md:text-3xl font-semibold text-gray-600">
              D A M
            </span>
          </Link>
        </div>
        {/* code to display hamburger buttton */}
        <div className="flex md:hidden">
          <button className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
            <svg
              className="fill-current h-5 w-5 block"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/*        // header right*/}
        <div className="hidden  md:flex  items-center gap-[50px]">
          <ul
            className={classNames(
              "flex items-center gap-[10px]",
              "md:flex",
              "p-5 z-10 absolute bg-white/80 backdrop-blur w-full left-0 opacity-0 top-[-400px] transition-all",
              "ease-in duration-500 md:p-0 md:flex md:items-center md:space-x-8 md:static md:w-auto md:opacity-100"
            )}
          >
            <li>
              <Link
                href="/"
                className="font-medium duration-500 text-gray-900 hover:text-indigo-900"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium duration-500 text-gray-900 hover:text-indigo-900"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium duration-500 text-gray-900 hover:text-indigo-900"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium duration-500 text-gray-900 hover:text-indigo-900"
              >
                Contact
              </Link>
            </li>
          </ul>
          <Link
            className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
            href="#"
          >
            Call Us
          </Link>
        </div>

         {/*        // Mobile Menu */}
         <div className="sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen  text-center ease-in duration-300">
          <ul>
            <li className='p-4 text-4xl hover:text-gray-500 '>
              <Link href="/">Home</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href="/">Services</Link>
            </li>
            <li className='p-4 text-4xl hover:text-gray-500'>
              <Link href="/">About</Link>
            </li>
          </ul>
         </div>
      </div>
    </header>
  );
};

export default Header;
