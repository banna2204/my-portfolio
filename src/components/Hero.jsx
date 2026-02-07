import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{
              y: 80,
              opacity: 0,
              filter: "blur(12px)",
            }}
            animate={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1], 
              delay: 0.2,
            }}
            id="home"
             className="flex flex-col items-center justify-center mt-24">
          <div className="flex flex-col items-center justify-center gap-3">
          <img
            className=" mt-12 rounded-full"
            width={230}
            src="mine3.jpg"
            alt=""
          />

          <h1
            className="mt-6 md:text-5xl text-3xl font-bold bg-gradient-to-r from-pink-700 to-yellow-500 bg-clip-text text-transparent"
          >
            I'm Shubham Singh
          </h1>
          <p className=" text-sm sm:w-[60%] w-[90%] text-center">
            I'm a passionate MERN stack web developer with a focus on building
            dynamic and responsive web applications. With expertise in MongoDB,
            Express.js, React, and Node.js.
          </p>
          <div className="flex m-14 gap-5">
            <AnchorLink
              offset={50}
              href="#contact"
              className=" button px-4 py-3 rounded-full cursor-pointer"
            >
              connect
              <lord-icon
                src="https://cdn.lordicon.com/kdduutaw.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "20px", height: "20px", padding: "5px" }}
              ></lord-icon>
            </AnchorLink>
            <a href="/CV_SHUBHAM.pdf" download="My_Resume.pdf">
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
      </motion.div>
      <hr />
    </>
  );
};

export default Hero;
