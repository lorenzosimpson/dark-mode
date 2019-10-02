import React, { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle" onClick={toggleMode}> 
        <div 
          // moved onClick to container so whole switch is clickable
          className={darkMode ? 'toggle toggled' : 'toggle'} // if darkmode initialValue is falsy. use !darkMode to change default to dark mode
        />
      </div>
    </nav>
  );
};

export default Navbar;
