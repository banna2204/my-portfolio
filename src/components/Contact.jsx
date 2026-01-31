import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import {motion} from 'framer-motion'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7b9e970a-73c1-4bb5-8fa5-7d4475c58af9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    if (object.name.length < 3 && object.email.length < 5 && object.message.length < 3 ) {
      return toast("Please enter valid details");
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      toast("Email send successfully!");
      event.target.email.value='';
      event.target.name.value='';
      event.target.message.value='';
    }
  };


  return (
    <>
        <ToastContainer />
      <motion.div
        initial={{ y: 80, opacity: 0, filter: "blur(10px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
        }}
      id="contact" className="flex flex-col items-center justify-center md:mt-12 mt-6 w-full md:gap-24 gap-10">
        <h1 className="font-bold text-5xl bg-gradient-to-r from-pink-700 to-yellow-500 bg-clip-text text-transparent md:mb-5 ">
          Get in touch
        </h1>

        <div className="md:flex justify-center md:gap-16 gap-10 p-4 md:pl-0">
          <div className="left md:w-[35%] w-full flex flex-col ">
            <h1 className="font-bold text-4xl bg-gradient-to-r from-pink-700 to-yellow-500 bg-clip-text text-transparent mb-4">
              Let's talk
            </h1>
            <p>
              I'm currently available on new projects, so feel free to send me a
              message about anything that you want on. You can contact anytime.
            </p>
            <p>
              <lord-icon
                src="https://cdn.lordicon.com/vpbspaec.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{width: "25px",height: "25px",margin: "8px",paddingTop: "15px",}}
              ></lord-icon>
              shubham.rajput2204@gmail.com
            </p>
            <p>
              <lord-icon
                src="https://cdn.lordicon.com/dnphlhar.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#242424,secondary:#ffffff"
                style={{width: "25px",height: "25px",margin: "8px",paddingTop: "15px",}}
              ></lord-icon>
              +91 96173-68390
            </p>
            <p>
              <lord-icon
                src="https://cdn.lordicon.com/onmwuuox.json"
                trigger="hover"
                stroke="bold"
                colors="primary:#ffffff,secondary:#0a5c15"
                style={{width: "25px",height: "25px",margin: "8px",paddingTop: "15px",}}
              ></lord-icon>
              Indore,India
            </p>
          </div>

          <form onSubmit={onSubmit} className="mt-10 md:mt-0 right flex flex-col md:w-[40%] w-full gap-3">
            <div className="flex flex-col gap-2">
              Your Name
              <input
                className="p-2 bg-slate-600 outline-none rounded-sm"
                type="text"
                placeholder="Enter your name"
                name="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              Your Email
              <input
                className="p-2 bg-slate-600 outline-none rounded-sm "
                type="text"
                placeholder="Enter your email"
                name="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              Write your message here
              <textarea
                className=" bg-slate-600 outline-none rounded-sm p-2"
                name="message"
                id="message"
                placeholder="Enter your message"
                cols={40}
                rows={5}
              ></textarea>
            </div>
            <button className=" button px-4 py-3 mt-3 md:mb-14 mb-5 w-32 rounded-full cursor-pointer">
              Submit now
            </button>
          </form>
        </div>
      </motion.div>
      <hr />
    </>
  );
};

export default Contact;
