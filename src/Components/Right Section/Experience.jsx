import React from "react";
import Content from "./Content";

const Experience = () => {
  return (
    <div className="text-base education">
      <h4 className="w-24 sm:w-full">Experience</h4>
      <Content>
        <div className="m-0">
          <span className="text-base font-bold title">
            Full stack Developer - Intern
          </span>
          <span className="text-sm font-medium float-right text-light">
            March 2023 - Present
          </span>
        </div>
        <div className="mb-2 italic company">
          <a href="https://www.xbi4.com/" target="_blank" className="font-bold">
            XBI4
          </a>
          <br />
          <div>Tenkasi, Tamil Nadu</div>
        </div>
        <div className="p-0 m-0">
          <ul className="pl-5 mt-2 text-sm">
            <li className="">
              Developing and maintaining in-house website primarily using
              JavaScript, React, TailwindCSS and Node.
            </li>
            <li className="">
              Working with 2 project and design team to innovate existing and
              new experiences.
            </li>
            <li className="">
              Collaborating with 2 interns and 2 developers to determine design,
              app interaction, and enhancement.
            </li>
          </ul>
        </div>
      </Content>
    </div>
  );
};

export default Experience;
