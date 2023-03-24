import React from "react";
import Content from "./Content";

const Intro = () => {
  return (
    <div className="introduction">
      <h4 className="w-24 sm:w-full">Intro</h4>
      <Content>
        <p className="mb-4 intro-p first-of-type:mt-0">
          I&#39;m currently in my final year studying Computer
          Science and Engineering at SCAD College of Engineering and Technology.
        </p>
        <p className="my-4 intro-p first-of-type:mt-0">
          I'm interested in designing front-end and developing interactive websites. I'm working on AuCalc, a CGPA and GPA calculator, Single page web application and Personal Portfolio websites to showcase my skills and projects.
        </p>
        <span className="font-medium text-transparent intro-p first-of-type:mt-0 bg-clip-text bg-bgimage bg-gradient-to-t from-bgGra1 to-bgGra2">
          I'm looking for a job that offers immense growth opportunities and to implement my knowledge and skills to contribute to the success of the organization.
        </span>
      </Content>
    </div>
  );
};

export default Intro;
