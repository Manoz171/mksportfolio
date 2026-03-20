import React, { useEffect, useRef } from 'react';

const projects = [
  {
    title: "DineInOrder",
    desc: "Developed a responsive Food Ordering System.",
    tech: "PHP, Bootstrap, MySQL",
    link: "#"
  },
  {
    title: "QuizMaster",
    desc: "Built a modern quiz application with real-time scoring.",
    tech: "PHP, Tailwind CSS, JS",
    link: "#"
  },
  {
    title: "RBN Software",
    desc: "Designed the frontend for Road Board Nepal software.",
    tech: "React, Tailwind CSS, JS, ReactStrap",
    link: "#"
  },
  {
    title: "Weather Monitoring System",
    desc: "Designed a real-time weather monitoring application.",
    tech: "React, Tailwind CSS, JS, ReactStrap",
    link: "#"
  },
  {
    title: "Health Checker",
    desc: "Developed a health monitoring app with real-time data.",
    tech: "React, Tailwind CSS, JS, Django",
    link: "#"
  }
];

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 0.5;
    let rafId;

    function step() {
      container.scrollLeft += speed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }

      rafId = requestAnimationFrame(step);
    }

    rafId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section id='projects' className="max-w-6xl mx-auto pt-[150px] mb-112 px-4">
      <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="w-screen max-w-5xl mx-auto flex gap-3 md:gap-6 overflow-x-hidden py-4 px-2 sm:px-4"
        style={{
          scrollBehavior: "auto",
          msOverflowStyle: "none",
          scrollbarWidth: "none"
        }}
      >
        {/* Hide scrollbar for Chrome */}
        <style>
          {`
            div::-webkit-scrollbar {
              display: none;
            }
          `}
        </style>

        {[...projects, ...projects].map((p, idx) => (
          <div
            key={idx}
            className="min-w-[280px] flex-shrink-0 p-6 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition"
          >
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="mb-2">{p.desc}</p>
            <p className="mb-2 text-sm">Technologies: {p.tech}</p>
            <a href={p.link} className="underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;