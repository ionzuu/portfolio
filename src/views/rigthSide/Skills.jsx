import React from 'react';

export const Skills = () => {
  return (
    <>
        <div className="ContainerEducation">
            <p className='Education'><b>Skills: </b><br/></p>
            <div className="w-layout-grid grid">
            <img className='html' src={require('../../img/html.png')} />
            <img className='css' src={require('../../img/css.png')} />
            <img className='js' src={require('../../img/js.png')} />
            <img className='react' src={require('../../img/react.png')} />
            </div>
            
        </div>
    </>
  )
}
