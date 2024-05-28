import React from "react";

function useAboutInfo() {
  const info = [
    {
      heading: "Personal Info",
      details: {
        name: "Pratap Senapati",
        phone: "8117882513",
        gmail: "pintupratap8@gmail.com",
      },
    },
    {
      heading: "Skills",
      details: {
        frontend: "html,css ,js ,React,redux",
        backend: "node js, express js ,spring boot ,servlet,jsp",
        database: "mongo db,my sql",
        additional: "c,c++,python (basic), debugging ,problem solving",
      },
    },
    {
      heading: "Education",
      details: {
        "10th": "Nrusingha Jew Nodal High School ,Manikpur (77%)",
        "12th": "kendrapada Autonomus college,Kendrapada (79%)",
        Graduation:
          "Raajdhani Engineering College,BBSR(4th year ,continuing... )",
        "Java fullstack": "Java Technocrat,BBSR",
      },
    },
  ];
  return info;
}

export default useAboutInfo;
