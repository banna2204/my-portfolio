import React from "react";
import {motion} from 'framer-motion'

const Skills = () => {
  let circle = (
    <lord-icon
      src="https://cdn.lordicon.com/mtuudzxm.json"
      trigger="hover"
      stroke="bold"
      colors="primary:#ffffff,secondary:#ffffff"
      style={{ width: "10px", height: "10px", paddingRight: "15px" }}
    ></lord-icon>
  );
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
      id="skills" className="flex flex-col items-center justify-center mt-8 gap-5">
        <h1 className="font-bold text-5xl bg-gradient-to-r from-pink-700 to-yellow-500 bg-clip-text text-transparent mb-5">
          My Skills
        </h1>
        <div className="flex lg:gap-24 gap-8 flex-wrap w-3/4 mt-10 m-auto pb-20">
          <div className="skill flex flex-col gap-5">
            <p className="font-bold text-2xl bg-gradient-to-r from-pink-700 to-yellow-500 bg-clip-text text-transparent">Programming Languages:</p>
            <span>{circle} C, C++</span>
            <span>{circle} HTML5, CSS3</span>
            <span>{circle} JavaScript</span>
          </div>
          <div className="skill flex flex-col gap-5">
            <p className="font-bold text-2xl bg-gradient-to-r from-pink-700 to-yellow-500 bg-clip-text text-transparent">Frontend Development:</p>
            <span>{circle} ReactJS</span>
            <span>{circle} Responsive Design</span>
            <span>{circle} Tailwind CSS, Bootstrap</span>
          </div>
          <div className="skill flex flex-col gap-5">
            <p className="font-bold text-2xl bg-gradient-to-r from-pink-700 to-yellow-500 bg-clip-text text-transparent">Backend Development:</p>
            <span>{circle} Node.js (Express.js)</span>
            <span>{circle} RESTful APIs</span>
            <span>{circle} Authentication (JWT, OAuth)</span>
          </div>
          <div className="skill flex flex-col gap-5">
            <p className="font-bold text-2xl bg-gradient-to-r from-pink-700 to-yellow-500 bg-clip-text text-transparent">Database Management:</p>
            <span>{circle} MongoDB (CRUD Operations, Aggregation Framework)</span>
          </div>
          <div className="skill flex flex-col gap-5">
            <p className="font-bold text-2xl bg-gradient-to-r from-pink-700 to-yellow-500 bg-clip-text text-transparent">Version Control:</p>
            <span>{circle} Git&GitHub</span>
          </div>
        </div>
      </motion.div>
      <hr />
    </>
  );
};

export default Skills;
