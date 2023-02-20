export const Buttonslink = ({theme}) => {
  return (
    <>
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
    </>
  )
}
