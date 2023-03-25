import React from "react";
import Project1 from "../Content/Projects";
import Content from "../Content/Content";

const Projects = () => {
  return (
    <div className="projects">
      <h4 className="w-24 sm:w-full">Projects</h4>
      <Content>
        <Projects />
      </Content>
    </div>
  );
};

export default Projects;
