import React from 'react';

export const Skills = () => {
  return (
    <>
        <div className="ContainerEducation">
            <p className='Education'><b>Skills: </b><br/></p>
            <div className="w-layout-grid grid">
              <div className="imgcont">
                <img className='html' src={require('../../img/html.png')} />
                <p className='noteexp'>working with it</p>
              </div>
              <div className="imgcont">
                <img className='html' src={require('../../img/css.png')} />
                <p className='noteexp'>working with it</p>
              </div>
              <div className="imgcont">
                <img className='html' src={require('../../img/js.png')} />
                <p className='noteexp'>working with it</p>
              </div>
              <div className="imgcont">
                <img className='html' src={require('../../img/react.png')} />
                <p className='noteexp'>working with it</p>
              </div>
              <div className="imgcont">
                <img className='html' src={require('../../img/cplus.png')} />
                <p className='noteexp'>getting experience</p>
              </div>
              <div className="imgcont">
                <img className='html' src={require('../../img/figma.png')} />
                <p className='noteexp'>working with it</p>
              </div>
              <div className="imgcont">
                <img className='html' src={require('../../img/arch.png')} />
                <p className='noteexp'>I used it every day</p>
              </div>
              <div className="imgcont">
                <img className='html' src={require('../../img/unity.png')} />
                <p className='noteexp'>getting experience</p>
              </div>
            </div>
            
        </div>
    </>
  )
}
