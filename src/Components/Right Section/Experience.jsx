import React from 'react'

const Experience =() => {
  return (
    <div className="text-base education">
      <h4 className="w-20 sm:w-full">Experience</h4>
      <Content>
        <div className="text-base font-bold university">
          Full stack Intern
        </div>
        <div className="mb-2 italic font-bold college">
          <a href="/" target="_blank">
            XBI4
          </a>
          <br />
          Tenkasi, Tamil Nadu
        </div>
        <div className="text-base branch">
          <strong className="font-semibold">Branch:</strong> Computer Science
          and Engineering
        </div>
        <div className="text-base study-abroad">
          <strong className="font-semibold">CGPA: 8.21</strong> (upto 6th
          Semester)
        </div>
        <div className="text-base grad-date">
          <strong className="font-semibold">Expected Graduation:</strong> May
          2023
        </div>
      </Content>
    </div>
  )
}
