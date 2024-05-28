import React, { useEffect } from "react";

import { FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { FiDownload } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";

function Contact() {
  return (
    <div className={`w-full  h-full    `}>
      <div className="w-full h-[900px] md:h-[700px]  flex  flex-col md:flex-row justify-center items-center  flex-warp gap-1 p-2 bg-retro ">
        <div className="  basis-full md:basis-[30%] w-full h-full p-1  flex justify-center items-center rounded-xl  shadow-xl  bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-0 ">
          <div className="w-full h-auto  rounded-3xl  p-3  ">
            <h1 className=" text-5xl text-center m-1  capitalize font-semibold ">
              Contact Me
            </h1>
            <div className="divider"></div>
            <p className="text-2xl text-start m-2  capitalize  flex gap-2">
              <span className="text-[#ff004f]  flex justify-center items-center">
                <IoMdContact />
              </span>
              Pratap Senapti
            </p>
            <p className="text-2xl text-start m-2   flex gap-2 ">
              <span className="text-[#ff004f]  flex justify-center items-center">
                <MdEmail />
              </span>
              pintupratap8@gmail.com
            </p>
            <p className="text-2xl text-start m-2  capitalize  flex gap-2">
              <span className="text-[#ff004f] flex justify-center items-center">
                <FaPhoneAlt />
              </span>
              8117882513
            </p>

            <div className="flex gap-2 justify-start items-center p-2 text-2xl ">
              <a
                href="https://www.linkedin.com/in/pratap-senapati-5b5018264/"
                target="_blank"
                className="hover:text-blue-600"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/_pra__tap_/"
                target="_blank"
                className="hover:text-[#ff002f]"
              >
                <BsInstagram />
              </a>
              <a href="" target="_blank" className="hover:text-blue-600">
                <FaFacebook />
              </a>
            </div>
            <a
              href="/document/pratap-cv.pdf"
              className=" text-center w-full  btn btn-xl text-2xl hover:bg-[#0000005d] bg-transparent  uppercase  text-black hover:text-white"
              download
            >
              <FiDownload /> download cv
            </a>
          </div>
        </div>
        <div className=" p-4  basis-full md:basis-[70%] w-full h-full   rounded-xl shadow-2xl  flex justify-center items-center">
          <form
            action=""
            className="flex flex-col items-center  w-full  gap-3 "
          >
            <input
              type="text"
              placeholder="Enter your Name"
              className=" rounded-lg py-2.5 px-4  bg-transparent w-full  shadow  outline-none  bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-0 "
            />
            <input
              type="text"
              placeholder="Enter your email"
              className="rounded-lg py-2.5 px-4  bg-transparent w-full  shadow  outline-none  bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-0 "
            />

            <textarea
              className="rounded-lg py-2.5 px-4  bg-transparent outline-none  shadow h-[300px] w-full  border-[#ffffff2c] border border-1 resize-none   bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-0   "
              placeholder="Enter your description"
            ></textarea>
            <button
              type="submit"
              className="border py-2 rounded-lg w-1/2 hover:bg-[#0000005d] border-[#ffffff2c]capitalize text-xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
