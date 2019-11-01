import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import {   Link} from "react-router-dom";


const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  
  return (
    
    <nav className="navbar">
      <h1 data-testid="display">Women's World Cup players Ranked </h1>
      <Link to="/">View Table</Link>

      <Link to="/graph">View Graph</Link>
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
