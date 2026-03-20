import React from 'react';

const About = () => (
  <section id="about" className="max-w-2xl mx-auto text-center pt-[150px] mb-24">
  <h2 className="text-7xl font-semibold mb-0 leading-tight">
    I Build 
  </h2>
  <h2 className="text-6xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-black">
   What You Imagine...
  </h2> 
    <p
  className="text-white italic text-lg mt-0"
  style={{ fontFamily: "'Pacifico', cursive" }}
>
  From Idea to Application
</p>
<br /> <br />

    
    <p>
      I am a passionate developer with experience in building responsive websites and web apps.
     <br /> I enjoy solving problems with clean code and innovative solutions.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
      <a
        href="#projects"
        className="px-6 py-3 bg-accent hover:bg-accent/80 text-white font-semibold rounded shadow transition"
      >
        View Projects
      </a>
      <a
        href="/src/assets/Manoz_CV.pdf"
        download
        className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded shadow transition"
      >
        Download CV
      </a>
    </div>
  </section>
);

export default About;
