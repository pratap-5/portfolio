import React, { useEffect, useRef, useState } from "react";

// import image from "../imgs/planerush.jpg";
import ImageBox from "../components/ImageBox";
import useServiceInfo from "../info/useServiceInfo";
import { FaExternalLinkAlt } from "react-icons/fa";

function Services() {
  const [selectedService, setSelectedService] = useState();
  const serviceInfos = useServiceInfo();
  const [children, setChildren] = useState();
  const currentService = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentService.current) {
      setChildren(Array.from(currentService.current.children));
    }
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      if (children && children?.length > 0) {
        children.map((child) => {
          child.style.transform = "scale(1)";
          child.style.zIndex = "0";
        });

        children[currentIndex].click(); // Click the current child element
        if (currentIndex === children.indexOf(children[currentIndex])) {
          children[currentIndex].style.transform = "scale(1.3)";
          children[currentIndex].style.zIndex = "1";
        }

        setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length); // Move to the next index and loop back to the start
      }
    }, 1500);

    return () => clearTimeout(id);
  }, [currentIndex, children]);

  return (
    <div className={`w-full  h-full `}>
      <div className="    p-2  w-full   h-[800px]  md:h-[1000px] xl:h-[700px] flex flex-col xl:flex-row justify-center items-center overflow-hidden gap-1 md:gap-3 ">
        <div className=" flex flex-col  relative  basis-[60%]  xl:basis-[70%]  h-full w-full  p-[10px] sm:p-[40px] ">
          <img
            src={selectedService?.imageLink || serviceInfos[0].imageLink}
            alt=""
            className="   h-full w-full   transition-all duration-300  rounded-lg  "
          />

          <div
            className="  px-2 h-[150px] xl:h-[200px] w-full absolute left-0 bottom-0  flex justify-start   items-center gap-2 overflow-auto"
            ref={currentService}
          >
            {serviceInfos.map((service, ind) => {
              return (
                <ImageBox
                  key={ind}
                  service={service}
                  setSelectedService={setSelectedService}
                />
              );
            })}
          </div>
        </div>

        <div className=" basis-[40%] xl:basis-[30%]   w-full  h-full  flex justify-center  items-center gap-1  ">
          <span className="   p-3 overflow-hidden  w-full h-full text-center  shadow-lg shadow-black  tracking-wide  rounded-lg ">
            <a
              href={selectedService?.link || ""}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 btn"
            >
              {selectedService?.link  || "link not available"}<FaExternalLinkAlt />

            </a>
            <h1 className="md:text-3xl  text-[red] mt-1 font-semibold font-serif">
              {selectedService?.projectName || "project name not available"}
            </h1>
            <div className="divider"></div>
            <p className="text-justify  h-[200px] md:h-full overflow-auto mt-3 font-roboto">
              {selectedService?.details || "Details not availavle"}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Services;
