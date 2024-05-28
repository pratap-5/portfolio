import React, { useEffect, useRef, useState } from "react";
import useGlobal from "../global/useGlobal";

function Slider({ info }) {
  const { darkMode } = useGlobal();
  const scrollRef = useRef(null);
  const delay = 2500;
  const [childWidth, setChildWidth] = useState();
  const [curInd, setCurInd] = useState(0);

  const bgColor=darkMode?"bg-slate-800":"bg-slate-200"

  useEffect(() => {
    if (scrollRef.current && scrollRef.current.firstChild) {
      setChildWidth(scrollRef.current.firstChild.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const scrollInterval = setTimeout(() => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;


        if (scrollWidth - clientWidth >= clientWidth + scrollLeft) {
          let i = curInd;
          setCurInd(++i);
          scrollRef.current.scrollBy({ left: childWidth, behavior: "smooth" });
        } else {
          // Reset to the start
          setCurInd(1);
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, delay);

    return () => clearTimeout(scrollInterval);
  }, [curInd,scrollRef]);

  return (
    <div>
      <div
        className=" flex justify-start gap-3 overflow-auto w-full h-full "
        ref={scrollRef}
      >
        {/* it will get info and retrive on info and bind with frontend */}
        {info.map((data, ind) => {
          return (
            <div
              className={`min-w-full mt-5 border border-slate-300  rounded-2xl p-2   bg-gray-400 bg-clip-padding backdrop-filter  backdrop-blur-lg bg-opacity-0 `}
              key={ind}
            >
              <h2 className=" text-center md:text-start  capitalize text-3xl font-semibold ">
                {data.heading}
              </h2>
              <div className="divider"></div>
              <div>
                {Object.keys(data.details).map((key, ind) => {
                  return (
                    <div key={ind}>
                      <h2 className=" text-blue-600  text capitalize text-xl font-bold">
                        {key}
                        {" :"}
                      </h2>
                      <p className="font-semibold mb-4"> {data.details[key]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {info.map((l, ind) => {
          return (
            <span
              key={ind}
              href="#item1"
              className={`w-6 h-6 border border-slate-500    rounded-lg flex justify-center items-center  ${
                curInd == ind + 1 ? "bg-purple-950 text-white" : ""
              } `}
            >
              {ind + 1}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
