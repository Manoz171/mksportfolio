import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 mb-12 px-6 bg-transparent bg-opacity-80 backdrop-blur-sm">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4">
        {/* Logo / Name on left (with decorative green indicator + center pulse) */}
        <div className="flex items-center">
          <div className="relative mr-3 inline-block w-3 h-3" aria-hidden="true">
            {/* pulsing ripple - behind */}
            <span className="absolute inset-0 rounded-full pulse-center" style={{ backgroundColor: '#00ffc8' }} />
            {/* solid center dot */}
            <span className="relative block w-3 h-3 rounded-full" style={{ backgroundColor: '#00ffc8' }} />
          </div>
          <h1 className="text-3xl font-bold animate-float">Manoz_Kumar_Shrestha</h1>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li>
            <a href="#about" className="text-white hover:text-gray-300 transition mt-40 mb-24">About</a>
          </li>
          <li>
            <a href="#skills" className="text-white hover:text-gray-300 transition">Skills</a>
          </li>
          <li>
            <a href="#experiance" className="text-white hover:text-gray-300 transition">Experiance</a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300 transition">Contact</a>
          </li>
        </ul> 

        {/* Mobile: burger button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile side-drawer (overlay + sliding panel) */}
      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black bg-opacity-40" onClick={() => setOpen(false)} aria-hidden="true" />

          {/* Sliding panel */}
          <aside className={`absolute top-0 right-0 h-full w-40 bg-gray-900 text-white transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Menu</h3>
                <button
                  className="p-2 rounded-md focus:outline-none focus:ring-2"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="mt-6">
                <ul className="flex flex-col space-y-4">
                  <li>
                    <a href="#about" onClick={() => setOpen(false)} className="block hover:text-gray-300 transition">About</a>
                  </li>
                  <li>
                    <a href="#skills" onClick={() => setOpen(false)} className="block hover:text-gray-300 transition">Skills</a>
                  </li>
                  <li>
                    <a href="#experiance" onClick={() => setOpen(false)} className="block hover:text-gray-300 transition">Experiance</a>
                  </li>
                  <li>
                    <a href="#contact" onClick={() => setOpen(false)} className="block hover:text-gray-300 transition">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      )}

      {/* Hero / Header Text */}
      <div className="text-center md:text-left mt-4">
        <h2 className="text-xl md:text-xl font-bold  mb-2 animate-float ml-6">Developer</h2>
      </div>
    </header>
  );
};

export default Header;
