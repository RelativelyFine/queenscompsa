import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

import { SiNotion } from "react-icons/si";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-81 top-2">
      <div className="flex justify-between items-center w-full h-full px-2 align-items 2xl:px-16">
        <Image
          src="/../public/assets/photos/compsalogo.png"
          alt="/"
          width="80"
          height="80"
          min-width="80"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none">
                Events
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none">
                Portfolios
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none">
                Merch
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm hover:border-b font-bold transition transform hover:-translate-y-[2px] motion-reduce:transition-none motion-reduce:hover:transform-none">
                Links
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase">
                <button className="transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold">
                  Contact
                </button>
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden square-full shadow-lg shadow-grey-700 cursor-pointer"
          >
            <AiOutlineMenuUnfold size={50} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#f6f1ff] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/photos/compsalogo.png"
                alt="/"
                width="80"
                height="80"
                min-width="80"
              />
              <div
                onClick={handleNav}
                className="square-full shadow-lg shadow-grey-700 cursor-pointer"
              >
                <AiOutlineMenuFold size={50} />
              </div>
            </div>
            <div className="border-b border-grey-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Are you keeping track of your compsa points?
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul>
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Portfolio</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Merch</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Links</li>
              </Link>

              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#553ade] font-bold">
                Want Our Media?
              </p>
              <div className="flex items-center justify-between">
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillLinkedin size={25} />
                </div>
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillMail size={25} />
                </div>
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillFacebook size={25} />
                </div>
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiFillInstagram size={25} />
                </div>
                <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <SiNotion size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
