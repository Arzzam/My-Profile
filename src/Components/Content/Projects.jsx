import React from "react";
import DATA from "../../JSON/ProjectDATA.json";

function Projects() {
  return (
    <>
      {DATA.map((data) => {
        return (
          <>
            <div className="project-item" key={data.projectId}>
              <div className="font-bold project-title">{data.title}</div>
              <p className="mx-0 mt-0 mb-3 text-base project-desc">
                {data.description}
              </p>
            </div>
            <div className="">
              <ul className="p-0 m-0">
                <li className="ml-5 text-sm list-disc">{data.point1}</li>
                <li className="ml-5 text-sm list-disc">{data.point2}</li>
                <li className="ml-5 text-sm list-disc mb-10">{data.point3}</li>
              </ul>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Projects;
