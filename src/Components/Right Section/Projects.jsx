import React from "react";
import Content from "./Content";

const Projects = () => {
  return (
    <div className="projects">
      <h4 className="w-24 sm:w-full">Projects</h4>
      <Content>
        <div className="mb-5 project-item">
          <div className="font-bold project-title">AuCalc</div>
          <p className="mx-0 mt-0 mb-2 text-base project-desc">
            A GPA and CGPA Calculator for Anna University
          </p>
        </div>
        <div className="">
          <ul className="p-0 m-0">
            <li className="ml-5 text-sm list-disc">
              A web app that helps to calculate GPA and CGPA for Anna University
              students.
            </li>
            <li className="ml-5 text-sm list-disc">
              Mainly focus on Easy User Flow to make great User Experience.
            </li>
            <li className="ml-5 text-sm list-disc">
              Tech used: React, TailwindCSS, Material UI, Axios, Router, Python,
              Django, Pandas, PostgreSQL.
            </li>
          </ul>
        </div>
      </Content>
    </div>
  );
};

export default Projects;
