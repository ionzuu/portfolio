import React, { useState } from 'react'
import './App.css';
import './Header.css';

export const App = () => {

  const [theme, setOnThemeChange] = useState(true);


  return (
    <div className={`Container ${theme === true ? "LightTheme" : "DarkTheme" } `}>
      <header className="ContainerHeader">
        <nav className="thememode">
          <div className={`ButtonMode ${theme === true ? "lightmodebuttonback" : "darkmodebuttonback" } `}>
            <span onClick={() => setOnThemeChange(!theme)} className={`mode ${theme === true ? "lightmodebutton" : "darkmodebutton" } `}></span>
          </div>
        </nav>
        {theme === true ? "LightTheme" : "Dark Theme"}
      </header>
      <main className='BodyContainer'>
        <div className='WelcomeContainer'>
          <h3>Welcome to my Page</h3>
        </div>
      </main>
    </div>
  );
}
