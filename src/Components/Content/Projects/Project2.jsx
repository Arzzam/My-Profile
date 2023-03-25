import React from "react";

export default function Project2() {
  return (
    <>
      <div className="project-item">
        <div className="font-bold project-title">
          Personal Portfolio Website
        </div>
        <p className="mx-0 mt-0 mb-3 text-base project-desc">
          A Web version of my Resume
        </p>
      </div>
      <div className="">
        <ul className="p-0 m-0">
          <li className="ml-5 text-sm list-disc">
            A Personal Website that shows my professional
            skills,accomplishments, and experiences.
          </li>
          <li className="ml-5 text-sm list-disc">
            My website features an introduction that provides a brief overview
            of my skills and experience, a biography section that tells my story
            and highlights my values and passions, and sections dedicated to
            showcasing my work.
          </li>
          <li className="ml-5 text-sm list-disc">
            Working on improving in separate router for every section to view detail about it.
          </li>
        </ul>
      </div>
    </>
  );
}
