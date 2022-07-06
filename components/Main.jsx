import { React, useCallback } from "react";

import {
  AiFillLinkedin,
  AiFillMail,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

import { SiNotion } from "react-icons/si";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "./particles.json";

const Main = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <>
      <div className="container-style w-full h-[500px] sm:h-[600px] md:h-[700px] text-center bg-gradient-to-b from-[#c6b9fe] to-[#EEEBFD]">
        <Particles options={particlesOptions} init={particlesInit} />
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
          <div>
            <h1 className="uppercase text-[4em] sm:text-[8em] md:text-[10em] tracking-[0.1em]">
              compsa
            </h1>
            <p className="tracking-[0.1em] text-[#200263] text-[1.2em] sm:text-[1.7em] md:text-[2.1em]">
              &#123;queen&lsquo;s computing students&lsquo; association&#125;
            </p>
            <div className="hidden items-center justify-between max-w-[330px] m-auto py-4  md:flex">
              <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillLinkedin size={30} />
              </div>
              <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillMail size={30} />
              </div>
              <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillFacebook size={30} />
              </div>
              <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiFillInstagram size={30} />
              </div>
              <div className="rounded-full shadow-lg shadow-grey-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <SiNotion size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
