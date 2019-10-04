import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
// import Graph from "./Graph"

const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  
  return (
    <nav className="navbar">
      <h1>Women's World Cup players Ranked </h1>
      
      <button href="/Graph">View Graph</button>
      <div className="dark-mode__toggle">
        <div
          onClick={setDarkMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
       
      </div>
     
    </nav>
  );
};

export default NavBar;
