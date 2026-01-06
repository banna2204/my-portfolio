import React from "react";

const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="flex flex-col items-center justify-center mt-8"
      >
        <h1 className="font-bold text-5xl bg-gradient-to-r from-pink-700 to-yellow-500 bg-clip-text text-transparent mb-7">
          My Work
        </h1>

        <div className="contain ml-4 md:m-8 m-3 md:gap-8 gap-3 mb-10">

          <div className="flex flex-col items-center gap-2">
            <img
              className="hover cursor-pointer rounded-xl md:border-8 border-4 border-purple-400 md:h-[215px] h-[150px]"
              src="screenshot/resume.png"
              alt=""
            />
            <a href="https://ai-resume-builder-8oq4.onrender.com">
              <div className="flex gap-1 hover:gap-2 transition-all">
                Know More{" "}
                <img className="invert" width={20} src="more.png" alt="" />
              </div>
            </a>
          </div>


          <div className="flex flex-col items-center gap-2">
            <img
              className="hover cursor-pointer rounded-xl md:border-8 border-4 border-purple-400 md:h-[215px] h-[150px]"
              src="screenshot/listing.png"
              alt=""
            />
            <a href="https://listing-p1ov.onrender.com/">
              <div className="flex gap-1 hover:gap-2 transition-all">
                Know More{" "}
                <img className="invert" width={20} src="more.png" alt="" />
              </div>
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              className="hover cursor-pointer rounded-xl md:border-8 border-4 border-purple-400 md:h-[215px] h-[150px]"
              src="screenshot/foodDel.png"
              alt=""
            />
            <a href="https://fooddelivery-frontend-swgd.onrender.com/">
              <div className="flex gap-1 hover:gap-2 transition-all">
                Know More{" "}
                <img className="invert" width={20} src="more.png" alt="" />
              </div>
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              className="hover cursor-pointer rounded-xl md:border-8 border-4 border-purple-400 md:h-[215px] h-[150px]"
              src="screenshot/todo.png"
              alt=""
            />
            <a href="https://make-task-app.netlify.app/">
              <div className="flex gap-1 hover:gap-2 transition-all">
                Know More{" "}
                <img className="invert" width={20} src="more.png" alt="" />
              </div>
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              className="hover cursor-pointer rounded-xl md:border-8 border-4 border-purple-400 md:h-[215px] h-[150px]"
              src="screenshot/passReact.png"
              alt=""
            />
            <a href="https://pass-manager-app.netlify.app/">
              <div className="flex gap-1 hover:gap-2 transition-all">
                Know More{" "}
                <img className="invert" width={20} src="more.png" alt="" />
              </div>
            </a>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              className="hover cursor-pointer rounded-xl md:border-8 border-4 border-purple-400 md:h-[215px] h-[150px]"
              src="screenshot/myntra.png"
              alt=""
            />
            <a href="https://myyntra-ecommerce.netlify.app/">
              <div className="flex gap-1 hover:gap-2 transition-all">
                Know More{" "}
                <img className="invert" width={20} src="more.png" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Projects;
