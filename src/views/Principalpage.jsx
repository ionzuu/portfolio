import { usePages } from '../hooks/usePages'
import { Buttonslink } from './buttons';
import { Certification } from './rigthSide/Certification';
import { Calculator } from './rigthSide/Components/Calcu/Calculator';
import { Education } from './rigthSide/Education';
import { Experience } from './rigthSide/Experience';
import { Skills } from './rigthSide/Skills';

export const PrincipalPage = ({theme}) => {

  const { page, onNextPageChange, onPreviousPageChange } = usePages();
  return (
    <>
      <div className='positionpage'>{`${page+1}/${5}`}</div>
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
       <Buttonslink theme={theme} />
       </div>
      </div>
      <div className="RightSideWelcome">
        {page === 0 ? <div className={page === 0 ? 'actualpage' : 'nopage'}> <Education />    </div>         : <></>}
        {page === 1 ? <div className={page === 1 ? 'actualpage' : 'nopage'}> <Certification/> </div>         : <></> }
        {page === 2 ? <div className={page === 2 ? 'actualpage' : 'nopage'}> <Experience/>    </div>         : <></> }
        {page === 3 ? <div className={page === 3 ? 'actualpage' : 'nopage'}> <Skills/>        </div>         : <></> }
        {page === 4 ? <div className={page === 4 ? 'actualpagecalc' : 'nopage'}> <Calculator/>        </div>         : <></> }
          
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
