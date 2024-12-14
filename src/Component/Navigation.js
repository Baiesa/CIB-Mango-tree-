import React, { useState } from 'react';

const Navigation = ({ setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to control visibility of the menu

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-emerald-600 text-white py-4 shadow-md sticky top-0 z-50 transition-all ease-in-out duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-4">
          <img
            src="/api/placeholder/50/50" // Replace with actual logo image if needed
            alt="CIB Mango Tree Logo"
            className="w-12 h-12 rounded-full transition-all duration-300 hover:scale-105"
          />
          <h1 className="text-2xl font-bold text-white">CIB Mango Tree</h1>
        </div>

        {/* Hamburger button that toggles the menu visibility on all screens */}
        <button
          onClick={toggleMenu}
          className="text-white flex items-center px-4 py-2 rounded-md md:hidden" // Always visible
        >
          {/* Hamburger icon for mobile and desktop */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Menu items (shown only when menuOpen is true) */}
        <div className={`flex space-x-6 ${menuOpen ? 'block' : 'hidden'} md:flex`}>
          {['Home', 'What is CIB', 'How It Works', 'Who Can Use', 'Inspiration'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase().replace(/\s+/g, '-'))}
              className="flex items-center hover:bg-emerald-500 px-3 py-2 rounded-md transition-colors duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
