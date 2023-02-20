import { usePages } from '../hooks/usePages'
import { Certification } from './rigthSide/Certification';
import { Education } from './rigthSide/Education';
import { Experience } from './rigthSide/Experience';
import { Skills } from './rigthSide/Skills';

export const PrincipalPage = ({theme}) => {

  const { page, onNextPageChange, onPreviousPageChange } = usePages();
  return (
    <>
      <div className='WelcomeContainer'>
        <div className='ImgContainer'>
          <div className='img'></div>
        </div>
        <div className='WelcomeMessageContainer'>
          <p>Hi, my name is <b>Jonathan Costilla</b>.
          <br />
          I'm a systems administrator engineer
          </p>
        </div>
       <div className="buttonscontainers">
       <a
        href="https://www.credly.com/users/jonathan-alexander-costilla/badges"
        title='Certification Page'
        target="_blank" 
        className={`${theme === true ? "Credlybutton" : "Credlybuttondark" } `}>
          Credly
        </a>
        <a
        href="https://www.github.com/ionzuu"
        title='My Github'
        target="_blank" 
        className={`Github ${theme === true ? "Credlybutton" : "Credlybuttondark" } `}>
          Github
        </a>
        <a
        href="https://www.linkedin.com/in/jonathan-costilla-6a0325260/"
        title='Linkedin Profile'
        target="_blank" 
        className={`Github ${theme === true ? "Credlybutton" : "Credlybuttondark" } `}>
          Linkedin
        </a>
        <a
        href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-jobsearch--indeedmobile&_ga=2.222726107.1380662040.1676866371-1057752314.1676866371"
        title='Linkedin Profile'
        target="_blank" 
        className={`Github ${theme === true ? "Credlybutton" : "Credlybuttondark" } `}>
          Indeed
        </a>
       </div>
      </div>
      <div className="RightSideWelcome">
        {page === 0 && <> <Education /> </> }
        {page === 1 && <> <Certification/> </> }
        {page === 2 && <> <Experience/> </> }
        {page === 3 && <> <Skills/> </> }
          
          <div className="buttons">
            <div className={`ChangePage PreviousPage ${theme === true ? "lightmodebuttonprev" : "darkmodebuttonbackprev" } `} onClick={onPreviousPageChange}>
              <div className={`Previous ${theme === true ? "lightprev" : "darkprev" } `}></div>
            </div>
            <div className={`ChangePage NextPage ${theme === true ? "lightmodebuttonnext" : "darkmodebuttonbacknext" } `} onClick={onNextPageChange}>
              <div className={`Next ${theme === true ? "lightnext" : "darknext" } `}></div>
              
            </div>    
          </div>
      </div>
    </>
  )
}
