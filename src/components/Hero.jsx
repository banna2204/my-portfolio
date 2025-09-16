import React from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <>
      <div id="home" className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-3">
          <img
            className=" mt-12 rounded-full"
            width={230}
            src="mine3.jpg"
            alt=""
          />
          <h1 className="mt-6 md:text-4xl text-3xl font-bold bg-gradient-to-r from-pink-700 to-yellow-500 bg-clip-text text-transparent">
            I'm Shubham Singh
          </h1>
          <p className=" text-sm sm:w-[60%] w-[90%] text-center">
            I'm a passionate MERN stack web developer with a focus on building
            dynamic and responsive web applications. With expertise in MongoDB,
            Express.js, React, and Node.js.
          </p>
          <div className="flex m-14 gap-5">
            <AnchorLink offset={50} href="#contact" className=" button px-4 py-3 rounded-full cursor-pointer">
              connect
              <lord-icon
                src="https://cdn.lordicon.com/kdduutaw.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#000000,secondary:#000000"
                style={{ width: "20px", height: "20px", padding: "5px" }}
              ></lord-icon>
            </AnchorLink>
            <a href="/ResumeLast.pdf" download="My_Resume.pdf">
            <button className="px-4 py-2 rounded-full cursor-pointer border-2 border-white hover:border-pink-900">
              Resume
              <lord-icon
                src="https://cdn.lordicon.com/fjvfsqea.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#ffffff,secondary:#16c72e"
                style={{ width: "20px", height: "20px", padding: "5px" }}
              ></lord-icon>
            </button>
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Hero;
