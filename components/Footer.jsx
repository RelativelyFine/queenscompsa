import React from "react";
import Image from "next/image";

import {
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

import { SiNotion } from "react-icons/si";

const Footer = () => {
  return (
    <div className="container-style w-full h-[70vh] bg-[#200263]">
      <div className="container-style w-full text-center">
        <h2 className="uppercase text-[2em] sm:text-[4em] md:text-[5em] tracking-[0.1em] py-4 text-[#fff]">
          Stay Conected
        </h2>
      </div>
      <div className="container-style w-full">
        <div className="max-w-[1200px] m-auto py-4 flex">
          <div className="p-4 cursor-pointer hover:scale-105 ease-in duration-300 flex items-center gap-2">
            <AiFillInstagram className="fill-[#fff]" size={50} />
            <h2 className="text-[2em] tracking-[0.1em] py-4 text-[#fff]">
              compsa
            </h2>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="container-style w-[55vw] h-[26vh] bg-[#Fff] rounded-xl text-center">
          <h4 className="text-[#200263]">Insta Stuff</h4>
        </div>
      </div>
      <div className="container-style w-full">
        <div className="max-w-[1200px] m-auto py-12 flex">
          <div className="p-4 cursor-pointer hover:scale-105 ease-in duration-300 flex items-center gap-2">
            <AiFillLinkedin className="fill-[#fff]" size={40} />
          </div>
          <div className="p-4 cursor-pointer hover:scale-105 ease-in duration-300 flex items-center gap-2">
            <AiFillMail className="fill-[#fff]" size={40} />
          </div>
          <div className="p-4 cursor-pointer hover:scale-105 ease-in duration-300 flex items-center gap-2">
            <AiFillFacebook className="fill-[#fff]" size={40} />
          </div>
          <div className="p-4 cursor-pointer hover:scale-105 ease-in duration-300 flex items-center gap-2">
            <SiNotion className="fill-[#fff]" size={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
