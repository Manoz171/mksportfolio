import React from 'react';

const experiences = [
    {
    role: "Academic",
    company: "Nobel Academic, New-Baneshwor",
    period: "2018 - 2020",
    desc: "NEB +2 level education focused core programming concepts and system design fundamentals"
  },
  {
    role: "",
    company: "Personal ",
    period: "",
    desc: "Utilized Figma to design user interfaces, build prototypes, and develop responsive design systems with a focus on user experience and visual consistency."
  },
  {
    role: "Academic",
    company: "Madan Bhandari Memorial College",
    period: "2021 - 2025",
    desc: "Comprehensive 4-year TU program focused on App Development, System Analysis, and Information Security."

  },
  {
    role: "Internship",
    company: "Intellisoft Nepal Pvt. Ltd.",
    period: "2023 - 2024",
    desc: " Worked on frontend development using React and Tailwind CSS, contributing to project features while practicing Agile development and collaborating within a team environment."
  }
];

const Experiance = () => (
  <section id="experiance" className="max-w-5xl mx-auto pt-[150px] mb-12 px-4">
    
    <h2 className="text-3xl font-semibold mb-4 text-center">
      Experience
    </h2>

    <p className="text-lg text-center mb-10">
      Here's a brief overview of my professional journey.
    </p>

    {/* Experience Containers */}
    <div className="space-y-6">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
            <h3 className="text-xl font-bold">{exp.company}</h3>
            <span className="text-sm text-black-300">{exp.period}</span>
          </div>

          <p className="text-sm font-semibold mb-2">{exp.role}</p>

          <p className="text-sm text-black-200">
            {exp.desc}
          </p>
        </div>
      ))}
    </div>

  </section>
);

export default Experiance;
