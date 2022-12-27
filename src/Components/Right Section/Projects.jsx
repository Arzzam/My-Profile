import React from "react";
import Content from "./Content";

const Projects = () => {
  return (
    <div className="projects">
      <h4>Projects</h4>
      <Content>
        <div className="mb-5 project-item">
          <div className="font-bold project-title">CourseSource</div>
          <p className="mx-0 mt-0 mb-2 text-base project-desc">
            Web app built on the MEAN (MongoDB, Express, Angular, Node) stack
            for my web development class. Created with the intention of
            providing students a better experience browsing the courses offered
            at Northeastern
          </p>
        </div>
      </Content>
    </div>
  );
};

export default Projects;
