import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full p-2 flex items-center py-16">
      <div className="md:max-w-[80vw] m-auto mobileabout:flex gap-8 justify-center items-center text-[1.2em] mobileabout:text-[0.9vw]">
        <div className="rounded-xl bg-[#DAD2FF] p-6 shadow-xl shadow-grey-400">
          <p className="uppercase text-xl tracking-widest ">About</p>
          <h2 className="uppercase text-[1em] sm:text-[2em] md:text-[3em] tracking-[0.1em] py-4">
            What is Compsa?
          </h2>
          <p className="py-2">// Large Butt</p>
          <p className="py-2">
            Queen&lsquo;s University Computing Students&lsquo; Association
            (COMPSA) is the student government for Queen&lsquo;s University
            School of Computing.
          </p>
          <p className="hidden md:flex">
            Queen&lsquo;s University Computing Students&lsquo; Association
            (COMPSA) is the student government for Queen&lsquo;s University
            School of Computing. COMPSA is run by a group of highly motivated
            students who represent and bring together the entire Computing
            student community through various events and opportunities. We
            organize social events, workshops, information sessions, and work
            together with the faculty to advocate for Computing students&lsquo;
            needs.
          </p>
          <p className="py-2 text-grey-600 underline cursor-pointer">
            Check out some of our latest events.
          </p>
        </div>
        <div className="col-span-2 min-h-[100%] min-w-[46%] h-auto m-auto shadow-xl shadow-grey-400 rounded-xl flex items-center justify-center sm:hover:scale-110 lg:hover:scale-125 ease-in duration-300">
          <Image
            src="/../public/assets/photos/CompsaPlaceholder.png"
            alt="/"
            width="1920"
            height="1080"
            className="my-image"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
