import React, { useState } from 'react'
import './App.css';
import './Header.css';
import { PrincipalPage } from './views/Principalpage';

export const App = () => {

  const [theme, setOnThemeChange] = useState(true);


  return (
    <div className={`Container ${theme === true ? "LightTheme" : "DarkTheme" } `}>
      <header className="ContainerHeader">
        <nav className="thememode">
          <p className='modo'>Theme:</p> 
          <div className={`ButtonMode ${theme === true ? "lightmodebuttonback" : "darkmodebuttonback" } `}>
            <span onClick={() => setOnThemeChange(!theme)} className={`mode ${theme === true ? "lightmodebutton" : "darkmodebutton" } `}></span>
          </div>
        </nav>
      </header>
      <main className='BodyContainer'>
       <PrincipalPage theme={theme} />
      </main>
    </div>
  );
}
