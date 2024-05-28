import React, { useEffect, useRef, useState } from "react";
import { FaLink } from "react-icons/fa";

function ImageBox({ setSelectedService, service }) {
  return (
    <div
      className={`flex  bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-0  shadow-xl   min-w-[200px] h-[100px]   xl:min-w-[280px]  xl:h-[150px] 
       rounded-lg overflow-hidden  shadow-black cursor-pointer  transition duration-300 transform  
       hover:z-10 hover:scale-125 hover:translate-y-[-1px] `}
      onClick={() => {
        setSelectedService(service);
      }}
    >
      <figure className="basis-[70%] w-full h-full p-3">
        <img   
          className="w-full h-full rounded-lg "
          src={service.imageLink}
          alt="Movie"
        />
      </figure>
      <div className="basis-[30%] text-start  p-2 w-full h-full  flex justify-center items-center flex-col xl:gap-5">
        <h2 className="xl:text-2xl text-[15px] ">{service.projectName}</h2>
        <a
          href={service?.link}
          className=" text-[10px]   px-4 py-1 rounded-sm bg-blue-500 flex justify-center items-center gap-1"
        >
          {" "}
          <FaLink />
          link
        </a>
      </div>
    </div>
  );
}

export default ImageBox;
