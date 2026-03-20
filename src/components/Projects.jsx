import React from 'react';

const projects = [
  {
    title: "School Website",
    desc: "Developed a responsive LMS platform for schools.",
    tech: "Laravel, Bootstrap, MySQL",
    link: "#"
  },
  {
    title: "Portfolio Website",
    desc: "Built a modern portfolio with animations and responsive layout.",
    tech: "React, Tailwind CSS, JS",
    link: "#"
  }
];

const Projects = () => (
  <section className="max-w-5xl mb-12">
    <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map(p => (
        <div key={p.title} className="p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition">
          <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
          <p className="mb-2">{p.desc}</p>
          <p className="mb-2">Technologies: {p.tech}</p>
          <a href={p.link} className="underline">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
