import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experiance from './components/Experiance';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <Header />
      <About />
      <Experiance />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
