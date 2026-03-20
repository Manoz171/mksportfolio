import React from 'react';

const skills = ["PHP", "JavaScript", "React", "Tailwind CSS", "MYSQL",];

const Skills = () => (
  <section id="skills" className="max-w-5xl mx-auto pt-[150px] mb-20">
    <h2 className="text-3xl font-semibold mb-4 text-center">Skills</h2>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map(skill => (
        <span key={skill} className="px-6 py-2 bg-white bg-opacity-12 rounded-full">{skill}</span>
      ))}
    </div>
  </section>
);

export default Skills;
