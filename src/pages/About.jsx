import React, { useEffect, useState } from "react";

import useAboutInfo from "../info/useAboutInfo";
import Slider from "../components/Slider";
function About() {
  const info = useAboutInfo();

  return (
    <div className={`w-full h-full `}>
      <div className="  w-full  h-[700px] p-2 flex  flex-col  md:flex-row  justify-center items-center gap-1 overflow-hidden">
        <div className=" md:basis-[30%] basis-full flex items-center justify-center  shadow-2xl w-full h-full rounded-lg  overflow-hidden   ">
          <img
            className="md:w-full  h-full  shadow-lg rounded-lg "
            src="/images/aboutImage.jpeg"
            alt=""
          />
        </div>

        <div className="  md:basis-[70%]  basis-full shadow-2xl  rounded p-5   w-full h-full  ">
          <h1 className="text-start  capitalize  text-3xl md:text-6xl font-semibold ">
            About Me
          </h1>
          <p className="  hidden  md:flex mt-2 text-blue-600 text-justify font-mono font-semibold w-full f-full">
            As a motivated and aspiring Java developer, I possess a solid
            foundation in core Java concepts and am proficient in leveraging
            industry-standard tools and practices to deliver high-quality
            software solutions. With a keen interest in software development, I
            am committed to continuous learning and growth in the field.
          </p>

          <Slider info={info} />
        </div>
      </div>
    </div>
  );
}

export default About;
