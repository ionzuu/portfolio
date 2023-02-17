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
