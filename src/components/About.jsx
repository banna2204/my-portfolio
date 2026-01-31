import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ y: 80, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 3,
          ease: [0.16, 1, 0.3, 1],
        }}
        viewport={{ once: true, amount: 0.3 }}
        id="about"
        className="flex flex-col items-center justify-center mt-4 mb-7 gap-10 "
      >
        <h1 className="font-bold md:text-6xl text-5xl bg-gradient-to-r from-pink-700 to-yellow-500 bg-clip-text text-transparent mb-4">
          About me
        </h1>
        <div className=" flex justify-center gap-11">
          <img
            className="hidden md:block rounded-lg"
            width={300}
            src="mine4.jpg"
            alt=""
          />

          <div className="content flex flex-col gap-3 md:w-[60%] w-full mb-5 p-3 md:p-0">
            <p>
              "I am a MERN stack web developer skilled in building dynamic and
              responsive web applications using MongoDB, Express.js, React.js,
              and Node.js. With a focus on clean code and user-friendly designs,
              I am passionate about creating efficient and scalable solutions
              for modern web development."
            </p>
            <p>
              "My passion for backend development is not only reflected in my
              extensive experience but also in the enthusiam and dedication i
              bring to each project."
            </p>

            <div className="mt-3 flex gap-10 items-center">
              <p>HTML&CSS</p>
              <div className="h-[6px] rounded-2xl w-3/4 bg-gradient-to-r from-pink-700 to-yellow-500"></div>
            </div>
            <div className="mt-3 flex gap-10 items-center">
              <p>React JS </p>
              <div className="h-[6px] rounded-2xl w-1/2 bg-gradient-to-r from-pink-700 to-yellow-500"></div>
            </div>
            <div className="mt-3 flex gap-10 items-center">
              <p>JavaScript</p>
              <div className="h-[6px] rounded-2xl w-2/3 bg-gradient-to-r from-pink-700 to-yellow-500"></div>
            </div>
            <div className="mt-3 flex gap-10 items-center">
              <p>Express JS</p>
              <div className="h-[6px] rounded-2xl w-[70%] bg-gradient-to-r from-pink-700 to-yellow-500"></div>
            </div>
          </div>
        </div>
      </motion.div>
      <h1 className="font-bold text-4xl mt-8 bg-gradient-to-r from-pink-700 to-yellow-700 bg-clip-text text-transparent md:ms-28 p-3">
        Education{" "}
      </h1>
      <div className="md:ms-28 p-3 py-3 md:w-3/4 w-full">
        I am currently pursuing a Bachelor of Technology B.Tech in Computer
        Science at Sushila Devi Bansal College, Indore, with an expected
        graduation year of 2026. I completed my higher secondary education Class
        12 in Barnagar, achieving 70%. Prior to that, I completed my secondary
        schooling Class 10 in Barnagar with commendable performance. My
        educational journey has equipped me with a strong foundation and a
        passion for continuous learning.
      </div>
      <hr />
    </>
  );
};

export default About;
